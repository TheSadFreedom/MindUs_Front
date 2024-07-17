import styled from "styled-components";
import { StyledNavigationLink } from "../../styles/styled";

export const CardProductStyled = styled("div")(() => ({
  display: 'grid',
  gridTemplateRows: '1fr 3fr 1fr',
  padding: "40px",
  width: "20vw",
  height: "450px",
  border: "1px solid white",
  borderRadius: "10px", 
}));

export const CardProductStyledHead = styled("div")(() => ({
  textAlign: 'center'
}));


export const CardProductStyledDescription = styled("div")(() => ({
}));

export const CardProductStyledLink = styled(StyledNavigationLink)(() => ({
   fontSize: '40px',
   color: '#f1f1f1'
}));
