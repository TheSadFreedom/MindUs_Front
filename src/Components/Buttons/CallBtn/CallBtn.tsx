import React, { useState } from "react";
import { CallBtnStyled } from "./CallBtn.styled";

interface Props {
    author: string;
}

export const CallBtn: React.FC<Props> = ({ author }) => {
    const [email, setEmail] = useState<string>("");

    const handleClick = async () => {
        try {
            // Отправляем запрос на сервер, чтобы получить почту автора
            const response = await fetch(`https://localhost:7168/api/Users/${author}`);
            const data = await response.json();
            
            // Предполагая, что сервер возвращает email автора
            const authorEmail = data.userEmail;
            
            // Открываем почту автора (просто для примера, в реальности вы можете использовать более сложные способы)
            window.open(`mailto:${authorEmail}`);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <CallBtnStyled variant="outlined" onClick={handleClick}>
            Связаться с автором
        </CallBtnStyled>
    );
};
