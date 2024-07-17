import React, { useState } from "react";
import axios from "axios";
import { StyledH1 } from "../../../styles/styled";
import { CompleteUploadBtn } from "../../Buttons/CompleteUploadBtn/CompleteUploadBtn";
import {
  UploadModalStyled,
  UploadaiModelDescriptionInputStyled,
  UploadaiModelNameInputStyled
} from "./UploadModal.styled";

interface UploadModalProps {
  handleClose: () => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({ handleClose }) => {
  const [aiModelName, setAiModelName] = useState<string>("");
  const [aiModelDescription, setAiModelDescription] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAiModelName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAiModelDescription(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const aiModelAuthor = localStorage.getItem("loggedInUser");
      if (!aiModelAuthor) {
        console.error("No logged in user found in localStorage.");
        return;
      }
  
      const requestData = {
        aiModelAuthor,
        aiModelName,
        aiModelDescription
      };
  
      console.log("Request data:", requestData);
  
      const response = await axios.post('https://localhost:7168/api/AiModels', requestData);
      alert("Нейросеть загружена усппешно!");
      console.log('Upload successful:', response.data);
      handleClose(); // Close the modal after successful upload
      window.location.reload(); // Reload the page
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Upload failed:', error.response.data);
        } else if (error.request) {
          console.error('No response from server:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unknown error:', error);
      }
    }
  };

  return (
    <UploadModalStyled>
      <StyledH1>Загрузка нейросети</StyledH1>
      <UploadaiModelNameInputStyled
        id="aiModelName-input"
        label="Название"
        variant="outlined"
        value={aiModelName}
        onChange={handleNameChange}
      />
      <UploadaiModelDescriptionInputStyled
        id="aiModelDescription-input"
        label="Описание"
        variant="outlined"
        multiline
        rows={6}
        value={aiModelDescription}
        onChange={handleDescriptionChange}
      />
      <CompleteUploadBtn onClick={handleSubmit} />
    </UploadModalStyled>
  );
};
