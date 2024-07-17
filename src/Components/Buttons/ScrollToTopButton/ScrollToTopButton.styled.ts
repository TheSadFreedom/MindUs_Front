import styled from "styled-components";

export const ScrollToTopButtonStyled = styled("img")(() => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: "9999",
  cursor: "pointer",
  transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
  fontSize: "calc(1.7vh + 1vw)",
  border: "1px solid rgba(129, 76, 198, 1)",
  width: "calc(3.5vh + 2vw)",
  height: "calc(3.5vh + 2vw)",
  borderRadius: "calc(1.1vh + 0.6vw)",
  backgroundColor: 'rgba(23, 22, 27, 1)'
}));
