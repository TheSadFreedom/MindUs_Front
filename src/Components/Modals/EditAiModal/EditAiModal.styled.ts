import styled from "styled-components";
import { TextField } from "@mui/material";

export const UploadModalStyled = styled("form")(() => ({
    width: "100%",
    height: "100%",
    zIndex: "1",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
}));

export const UploadaiModelNameInputStyled = styled(TextField)(() => ({
    width: "600px",
    height: "70px",
    borderRadius: "20px",
    border: "2px solid #f1f1f1",
    alignSelf: "center",
    "&&": {
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

export const UploadaiModelDescriptionInputStyled = styled(TextField)(() => ({
    width: "600px",
    height: "auto", // Изменяем высоту на auto
    borderRadius: "20px",
    border: "2px solid #f1f1f1",
    alignSelf: "center",
    "&&": {
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