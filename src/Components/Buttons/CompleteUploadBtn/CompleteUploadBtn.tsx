import React from "react";
import { CompleteUploadBtnStyled } from "./CompleteUploadBtn.styled";

interface CompleteUploadBtnProps {
    onClick: () => void;
}

export const CompleteUploadBtn: React.FC<CompleteUploadBtnProps> = ({ onClick }) => {
    return (
        <CompleteUploadBtnStyled variant="contained" onClick={onClick}>
            Завершить
        </CompleteUploadBtnStyled>
    );
};