import React from "react";
import axios from "axios";
import { DeleteBtnStyled } from "./DeleteBtn.styled";

interface DeleteBtnProps {
  id: number;
}

export const DeleteBtn: React.FC<DeleteBtnProps> = ({ id }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://localhost:7168/api/AiModels/${id}`);
      alert("Успешное удаление!");
      window.location.reload(); // Reload to reflect the changes
    } catch (error) {
      console.error("Failed to delete AI Model", error);
      alert("Удаление не удалось.");
    }
  };

  return (
    <DeleteBtnStyled variant="outlined" onClick={handleDelete}>
      Удалить
    </DeleteBtnStyled>
  );
};
