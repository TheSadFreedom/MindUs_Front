import React, { useState } from "react";
import axios from "axios";
import { StyledH1 } from "../../../styles/styled";
import { CompleteUploadBtn } from "../../Buttons/CompleteUploadBtn/CompleteUploadBtn";
import {
    EditProfileModalStyled,
    EdituserPasswordInputStyled,
    EdituserEmailInputStyled,
} from "./EditProfileModal.styled";

interface EditProfileModalProps {
    handleClose: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({ handleClose }) => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async () => {
        if (newPassword.length < 8) {
            setError("Пароль должен содержать минимум 8 символов");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }

        try {
            const loggedInUser = localStorage.getItem("loggedInUser");
            const userEmail = localStorage.getItem("userEmail");
            const userRole = localStorage.getItem("userRole") === "true"; // Assuming userRole is stored as string

            if (!loggedInUser || !userEmail) {
                setError("Пользователь не найден");
                return;
            }

            const response = await axios.put(`https://localhost:7168/api/Users/${loggedInUser}`, {
                userLogin: loggedInUser,
                userPassword: newPassword,
                userEmail: userEmail,
                userRole: userRole,
            });

            if (response.status === 204) {
                setSuccess("Пароль успешно изменен");
                // Сохранение нового пароля в локальное хранилище
                localStorage.setItem("userPassword", newPassword);
                handleClose();
            } else {
                setError(`Ошибка: ${response.statusText}`);
            }
        } catch (error) {
            console.error("Ошибка при смене пароля:", error);
            setError("Произошла ошибка при смене пароля");
        }
    };

    return (
        <EditProfileModalStyled>
            <StyledH1>Смена пароля</StyledH1>
            <EdituserPasswordInputStyled
                id="new-password-input"
                label="Новый пароль"
                variant="outlined"
                type="password"
                value={newPassword}
                onChange={handlePasswordChange}
            />
            <EdituserEmailInputStyled
                id="confirm-password-input"
                label="Повтор пароля"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
            {success && <div style={{ color: "green" }}>{success}</div>}
            <CompleteUploadBtn onClick={handleSubmit} />
        </EditProfileModalStyled>
    );
};
