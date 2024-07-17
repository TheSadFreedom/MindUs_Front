import React from "react";
import { CompleteEditBtnStyled } from "./CompleteEditBtn.styled";

interface CompleteEditBtnProps {
    onClick: () => void;
}

export const CompleteEditBtn: React.FC<CompleteEditBtnProps> = ({ onClick }) => {
    const handleClick = () => {
        onClick(); // Call the provided onClick function
        window.location.reload(); // Reload the page after onClick is executed
    };

    return (
        <CompleteEditBtnStyled variant="contained" onClick={handleClick}>
            Завершить
        </CompleteEditBtnStyled>
    );
};
