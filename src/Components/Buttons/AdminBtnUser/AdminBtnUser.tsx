import { AdminBtnUserStyled } from "./AdminBtnUser.styled";
import { useNavigate } from "react-router-dom";

export const AdminBtnUser = () => {
    const navigate = useNavigate();

    const handleAdminUserClick = () => {
        navigate("/AdminUser");
    };

    return (
        <AdminBtnUserStyled variant="outlined" onClick={handleAdminUserClick}>
            Пользователи
        </AdminBtnUserStyled>
    )
}