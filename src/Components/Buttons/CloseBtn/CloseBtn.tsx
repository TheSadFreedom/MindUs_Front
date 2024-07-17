import React from "react";
import { CloseBtnStyled } from "./CloseBtn.styled";

interface CloseBtnProps {
    handleClose: () => void;
}

export const CloseBtn: React.FC<CloseBtnProps> = ({ handleClose }) => {
    return (
        <CloseBtnStyled onClick={handleClose}>Закрыть</CloseBtnStyled>
    );
};
