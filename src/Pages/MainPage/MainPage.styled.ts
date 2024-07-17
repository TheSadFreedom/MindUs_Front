import styled from "styled-components";
import { StyledH1, StyledLargeP } from "../../styles/styled";

export const MainPageStyled = styled("div")(() => ({
  width: '100vw',
  zIndex: '1',
}));

export const FirstSlideStyled = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 0.8fr",
  alignItems: "center",

  height: '100vh',
  width: '100vw',

}));

export const FirstSlideLeftStyled = styled("div")(() => ({
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    paddingLeft: '5vw',
}));

export const FirstSlideRightStyled = styled("div")(() => ({}));

export const UTPTitle = styled("h1")(() => ({
    fontFamily: 'sans-serif, Proxima Nova',
    fontWeight: 'calc(27vw + 49vh)',
    width: '46vw',
    fontSize: 'calc(3vh + 1.7vw)',
    color: 'rgba(241, 241, 241, 1)',
    lineHeight: 'calc(3vh + 1.7vw)'
}));

export const UTPShortInfo = styled("h3")(() => ({
    fontFamily: 'sans-serif, Open Sans',
    fontWeight: 'calc(25vh + 15vw)',
    width: '46vw',
    fontSize: 'calc(1.1vh + 0.6vw)',
    color: 'rgba(241, 241, 241, 1)',
    lineHeight: 'calc(1.6vh + 0.9vw)'
}));

export const FluidImg = styled("img")(() => ({
    width: 'calc(41vh + 23vw)',
}));

export const SecondSlideStyled = styled("div")(() => ({
  height: '100vh',
  width: '100vw',
}));

export const StyledH1Edit = styled(StyledH1)(() => ({
  zIndex: '9999',
  textAlign: 'center',
  marginTop: '5vh'
}))

export const ShortDescription = styled(StyledLargeP)(() => ({
  margin: '10vh 20vw',
  fontFamily: 'Open Sans',
  fontSize: '25px',
  fontWeight: '400',
  lineHeight: '35px',
  textAlign: 'justify',
  color: '#F1F1F1',
  paddingBottom: '10vh'
}))