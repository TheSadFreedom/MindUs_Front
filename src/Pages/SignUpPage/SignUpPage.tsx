import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError } from 'axios'; // Импортируем AxiosError для обработки ошибок
import { useNavigate } from 'react-router-dom';
import {
  SignUpPageStyled,
  SignUpTitleStyled,
  SignUpInputStyled,
  SignUpButtonStyled
} from './SignUpPage.styled';

interface SignUpFormData {
  userLogin: string;
  userEmail: string;
  userPassword: string;
  userPasswordConfirm: string;
}

export const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    userLogin: '',
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: ''
  });

  const [errors, setErrors] = useState<Partial<SignUpFormData>>({});
  const navigate = useNavigate();

  const validate = (name: string, value: string): string | null => {
    switch (name) {
      case 'userLogin':
        if (/^\d/.test(value)) {
          return 'Логин не должен начинаться с цифры';
        }
        return null;
      case 'userEmail':
        if (!/@/.test(value)) {
          return 'Email должен содержать @';
        }
        return null;
      case 'userPassword':
        if (value.length < 8) {
          return 'Пароль должен быть минимум 8 символов';
        }
        return null;
      case 'userPasswordConfirm':
        if (value !== formData.userPassword) {
          return 'Пароли должны совпадать';
        }
        return null;
      default:
        return null;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validate(name, value);

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors: Partial<SignUpFormData> = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validate(name, value);
      if (error) {
        validationErrors[name as keyof SignUpFormData] = error;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('https://localhost:7168/api/Users', {
        userLogin: formData.userLogin,
        userEmail: formData.userEmail,
        userPassword: formData.userPassword,
        userPasswordConfirm: formData.userPasswordConfirm,
        userRole: false // Assuming userRole default value is false
      });

      console.log('Registration successful:', response.data);

      // Save user data to local storage
      localStorage.setItem('loggedInUser', formData.userLogin);
      localStorage.setItem('userEmail', formData.userEmail);
      localStorage.setItem('userPassword', formData.userPassword);
      localStorage.setItem('userRole', 'false'); // Convert boolean to string for storage

      // Redirect to user profile page
      navigate(`/Profile/${formData.userLogin}`);
      window.location.reload(); // Refresh page after login
    } catch (error: any) { // Обрабатываем ошибку типа any
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError; // Приводим к типу AxiosError
        if (axiosError.response && axiosError.response.status === 409) {
          console.error('Registration failed: Пользователь с таким логином уже существует');
          setErrors({
            ...errors,
            userLogin: 'Пользователь с таким логином уже существует'
          });
        } else {
          console.error('Registration failed:', axiosError);
          // Handle other errors (e.g., show a generic error message)
        }
      } else {
        console.error('Registration failed:', error);
        // Handle other errors (e.g., show a generic error message)
      }
    }
  };

  return (
    <SignUpPageStyled onSubmit={handleSubmit}>
      <SignUpTitleStyled>Регистрация</SignUpTitleStyled>
      <SignUpInputStyled
        id="userLogin"
        label="Логин"
        variant="outlined"
        color="secondary"
        name="userLogin"
        type="text"
        value={formData.userLogin}
        onChange={handleChange}
        error={!!errors.userLogin}
        helperText={errors.userLogin}
        required
      />
      <SignUpInputStyled
        id="userEmail"
        label="Email"
        variant="outlined"
        color="secondary"
        name="userEmail"
        type="email"
        value={formData.userEmail}
        onChange={handleChange}
        error={!!errors.userEmail}
        helperText={errors.userEmail}
        required
      />
      <SignUpInputStyled
        id="userPassword"
        label="Пароль"
        variant="outlined"
        color="secondary"
        name="userPassword"
        type="password"
        value={formData.userPassword}
        onChange={handleChange}
        error={!!errors.userPassword}
        helperText={errors.userPassword}
        required
      />
      <SignUpInputStyled
        id="userPasswordConfirm"
        label="Повторите пароль"
        variant="outlined"
        color="secondary"
        name="userPasswordConfirm"
        type="password"
        value={formData.userPasswordConfirm}
        onChange={handleChange}
        error={!!errors.userPasswordConfirm}
        helperText={errors.userPasswordConfirm}
        required
      />
      <SignUpButtonStyled type="submit">
        Зарегистрироваться
      </SignUpButtonStyled>
    </SignUpPageStyled>
  );
};

export default SignUpPage;
