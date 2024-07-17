import styled from "styled-components";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export const LoginPageStyled = styled("form")(() => ({
  width: "100vw",
  height: "100vh",
  zIndex: "1",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
}));

export const LoginTitleStyled = styled("h1")(() => ({
  fontFamily: "Proxima Nova",
  fontWeight: "800",
  fontSize: "48px",
  lineHeight: "63px",
  textAlign: "center",
  color: '#f1f1f1',
}));

export const LoginInputStyled = styled(TextField)(() => ({
  width: "600px",
  height: "70px",
  borderRadius: "20px",
  border: "2px solid #f1f1f1",
  alignSelf: "center",
  "&&":{
    margin: "10px 0"
  },
  "& .MuiOutlinedInput-root": {
    color: "#F1F1F1",
    fontFamily: "Open Sans",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#F1F1F1",
      borderWidth: "1px",
      borderRadius: "20px"
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "secondary.main",
        borderWidth: "2px",
      },
    },
    "&:hover:not(.Mui-focused)": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#F1F1F1",
      },
    },
  },
  "& .MuiInputLabel-outlined": {
    color: "#F1F1F1",
    "&.Mui-focused": {
      color: "secondary.main",
    },
  },
}));

export const LoginButtonStyled = styled(Button)(() => ({
  "&&": {
    zIndex: "1",
    borderRadius: "calc(0.7vh + 0.4vw)",
    background: "linear-gradient(180deg, #7E5AF0 0%, #814CC6 100%)",

    textDecoration: "none",
    color: "rgba(241, 241, 241, 1)",
    fontFamily: "sans-serif, Proxima Nova",
    textTransform: "none",
    fontWeight: "700",
    fontSize: "24px",
  },
  width: "600px",
  height: "70px",
  borderRadius: "20px",
  alignSelf: "center",
}));
