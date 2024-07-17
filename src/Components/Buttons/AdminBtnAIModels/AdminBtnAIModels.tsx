import { AdminBtnAIModelsStyled } from "./AdminBtnAIModels.styled";
import { useNavigate } from "react-router-dom";

export const AdminBtnAIModels = () => {
    const navigate = useNavigate();

    const handleAdminUserClick = () => {
        navigate("/AdminAI");
    };

    return (
        <AdminBtnAIModelsStyled variant="outlined" onClick={handleAdminUserClick}>
            Нейросети
        </AdminBtnAIModelsStyled>
    )
}