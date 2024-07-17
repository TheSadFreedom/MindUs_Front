import React from "react";
import { useLocation } from "react-router-dom";
import {
  CardProductStyled,
  CardProductStyledHead,
  CardProductStyledDescription,
} from "./CardProduct.styled";
import { StyledH4, StyledSmallP, StyledTitleLink } from "../../styles/styled";
import { CallBtn } from "../Buttons/CallBtn/CallBtn";
import { DeleteBtn } from "../Buttons/DeleteBtn/DeleteBtn";

interface Props {
  id: number;
  name: string;
  author: string;
  description: string;
}

export const CardProduct: React.FC<Props> = ({ id, name, author, description }) => {
  const location = useLocation();
  const loggedInUser = localStorage.getItem("loggedInUser");

  return (
    <CardProductStyled>
      <CardProductStyledHead>
        <StyledTitleLink to={"/Product"}>{name}</StyledTitleLink>
        <StyledSmallP>Автор: {author}</StyledSmallP>
      </CardProductStyledHead>
      <CardProductStyledDescription>
        <StyledH4>Описание:</StyledH4>
        <StyledSmallP>{description}</StyledSmallP>
      </CardProductStyledDescription>
      {location.pathname === "/Shop" && <CallBtn author={author} />}
      {location.pathname === `/Profile/${loggedInUser}` && <DeleteBtn id={id} />}
    </CardProductStyled>
  );
};
