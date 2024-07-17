import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledH1, StyledNavigationNoActiveLink } from "../../styles/styled";
import { AdminAIPageStyled, TableStyled, TableRowStyled, TableCellStyled, AdminUserCont } from "./AdminAIPage.styled";

interface aiModel {
  aiModelId: number;
  aiModelAuthor: string;
  aiModelName: string;
  aiModelDescription: string;
}

export const AdminAIPage: React.FC = () => {
  const [aiModels, setaiModels] = useState<aiModel[]>([]);

  useEffect(() => {
    const fetchaiModels = async () => {
      try {
        const response = await axios.get<aiModel[]>("https://localhost:7168/api/AiModels");
        console.log("Response data:", response.data);
        setaiModels(response.data);
      } catch (error) {
        console.error("Ошибка при получении моделей ИИ:", error);
      }
    };

    fetchaiModels();
  }, []);

  const handleDelete = async (aiModelId: number) => {
    try {
      await axios.delete(`https://localhost:7168/api/AiModels/${aiModelId}`);
      setaiModels((prevModels) => prevModels.filter((model) => model.aiModelId !== aiModelId));
    } catch (error) {
      console.error("Ошибка при удалении модели ИИ:", error);
    }
  };

  return (
    <AdminAIPageStyled>
      <AdminUserCont>
        <StyledH1>Модели ИИ:</StyledH1>
        <StyledNavigationNoActiveLink to={"/Profile/:login"}>Назад</StyledNavigationNoActiveLink>
      </AdminUserCont>

      <TableStyled>
        <thead>
          <tr>
            <TableCellStyled>ID</TableCellStyled>
            <TableCellStyled>Название</TableCellStyled>
            <TableCellStyled>Автор</TableCellStyled>
            <TableCellStyled>Описание</TableCellStyled>
            <TableCellStyled>Действия</TableCellStyled>
          </tr>
        </thead>
        <tbody>
          {aiModels.map((aiModel) => (
            <TableRowStyled key={aiModel.aiModelId}>
              <TableCellStyled>{aiModel.aiModelId}</TableCellStyled>
              <TableCellStyled>{aiModel.aiModelName}</TableCellStyled>
              <TableCellStyled>{aiModel.aiModelAuthor}</TableCellStyled>
              <TableCellStyled>{aiModel.aiModelDescription}</TableCellStyled>
              <TableCellStyled>
                <button onClick={() => handleDelete(aiModel.aiModelId)}>Удалить</button>
              </TableCellStyled>
            </TableRowStyled>
          ))}
        </tbody>
      </TableStyled>
    </AdminAIPageStyled>
  );
};
