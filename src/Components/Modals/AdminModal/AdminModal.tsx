import React from "react";
import { AdminModalStyled } from "./AdminModal.styled";
import { AdminBtnUser } from "../../Buttons/AdminBtnUser/AdminBtnUser";
import { AdminBtnAIModels } from "../../Buttons/AdminBtnAIModels/AdminBtnAIModels";
import { CloseBtn } from "../../Buttons/CloseBtn/CloseBtn";
import { StyledH1 } from "../../../styles/styled";

interface AdminModalProps {
    handleClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ handleClose }) => {
    return (
        <AdminModalStyled>
            <StyledH1>Панель управления</StyledH1>
            <AdminBtnUser/>
            <AdminBtnAIModels/>
            <CloseBtn handleClose={handleClose} />
        </AdminModalStyled>
    );
};
