import styled from "styled-components";
import { Button } from "@mui/material";

export const CloseBtnStyled = styled(Button)(() => ({
    "&&": {
    zIndex: '1',
    borderRadius: 'calc(0.7vh + 0.4vw)',
    background: 'linear-gradient(180deg, #7E5AF0 0%, #814CC6 100%)',
    textDecoration: 'none',
    color: 'rgba(241, 241, 241, 1)',
    fontFamily: 'sans-serif, Proxima Nova',
    textTransform: 'none',
    margin: '20px 0',
    width: "13.5vw",
    alignSelf: 'center',
    justifySelf: 'center',
    }
}))