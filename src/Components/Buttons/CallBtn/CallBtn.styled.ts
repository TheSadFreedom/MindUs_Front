import styled from "styled-components";
import Button from "@mui/material/Button";

export const CallBtnStyled = styled(Button)(() => ({
  "&&": {
    background: "none",
    border: "2px solid rgba(126, 90, 240, 1)",
    borderRadius: 'calc( 0.45vw + 0.83vh )',
    color: "rgba(241, 241, 241, 1)",
    width: "13.5vw",
    height: "7.5vh",
    fontSize: "calc(0.9vh + 0.5vw)",
    fontFamily: 'sans-serif, Open Sans',
    textTransform: 'none',
    zIndex: '9999',
    alignSelf: 'center',
    justifySelf: 'center',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    // boxShadow: "0px 0px 80px 60px rgba(139, 63, 198, 0.3)",
    "&:hover": {
        border: "2px solid rgba(126, 90, 240, 1)",
        color: "white",
      },
  },
}));
