import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  LoginPageStyled,
  LoginTitleStyled,
  LoginInputStyled,
  LoginButtonStyled
} from "./LoginPage.styled";

interface UserData {
  userPassword: string;
  userRole: string;
  userEmail: string; // Добавлено поле userEmail
}

export const LoginPage: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleUserPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Отправка запроса к API...");

      const response = await axios.get<UserData>(`https://localhost:7168/api/Users/${login}`, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      console.log("Ответ от API:", response);

      if (response.status === 200) {
        const data = response.data;
        console.log("Данные пользователя:", data);

        if (!data || !data.userPassword) {
          setError("Неверный логин или пароль");
          return;
        }

        if (data.userPassword === userPassword) {
          console.log("Вход успешен");
          localStorage.setItem("loggedInUser", login); // сохранение логина в localStorage
          
          // сохранение всех данных пользователя в localStorage
          localStorage.setItem("userEmail", data.userEmail);
          localStorage.setItem("userPassword", data.userPassword);
          localStorage.setItem("userRole", data.userRole);

          navigate(`/Profile/${login}`);
          window.location.reload(); // Обновление страницы после выхода
        } else {
          setError("Неверный логин или пароль");
        }
      } else {
        setError(`Ошибка сервера: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Ошибка при получении данных для входа:", error);
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 304) {
          setError("Данные не изменились. Пожалуйста, попробуйте снова.");
        } else if (error.response) {
          setError(`Ошибка сервера: ${error.response.status} ${error.response.statusText}`);
        } else if (error.request) {
          setError("Сервер не отвечает. Пожалуйста, попробуйте позже.");
        } else {
          setError("Произошла ошибка при попытке входа.");
        }
      } else {
        setError("Произошла неизвестная ошибка.");
      }
    }
  };

  return (
    <LoginPageStyled onSubmit={handleSubmit}>
      <LoginTitleStyled>Войти в аккаунт</LoginTitleStyled>
      <LoginInputStyled
        id="login-input"
        label="Логин"
        variant="outlined"
        value={login}
        onChange={handleLoginChange}
      />
      <LoginInputStyled
        id="userPassword-input"
        label="Пароль"
        variant="outlined"
        type="password"
        color="secondary"
        value={userPassword}
        onChange={handleUserPasswordChange}
      />
      <LoginButtonStyled type="submit">Войти</LoginButtonStyled>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </LoginPageStyled>
  );
};

export default LoginPage;
