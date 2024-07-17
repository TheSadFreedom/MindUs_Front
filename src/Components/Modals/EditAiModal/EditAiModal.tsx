import React, { useState } from "react";
import axios from "axios";
import { StyledH1 } from "../../../styles/styled";
import { CompleteUploadBtn } from "../../Buttons/CompleteUploadBtn/CompleteUploadBtn";
import {
  UploadModalStyled,
  UploadaiModelDescriptionInputStyled,
  UploadaiModelNameInputStyled
} from "./EditAiModal.styled";

interface UploadModalProps {
  handleClose: () => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({ handleClose }) => {

  return (
    <UploadModalStyled>
      <StyledH1>Загрузка нейросети</StyledH1>
      <UploadaiModelNameInputStyled
        id="aiModelName-input"
        label="Название"
        variant="outlined"
      />
      <UploadaiModelDescriptionInputStyled
        id="aiModelDescription-input"
        label="Описание"
        variant="outlined"
        multiline
        rows={6}
      />
      <CompleteUploadBtn onClick={function (): void {
        throw new Error("Function not implemented.");
      } }/>
    </UploadModalStyled>
  );
};
