import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledH1 } from "../../styles/styled";

export const UserPageStyled = styled("div")(() => ({
    display: 'grid',
}));

export const UserPageStyledCont1 = styled("div")(() => ({
    margin: '20vh 5vw',
    display: 'grid',
    gridTemplateColumns: '5fr 1fr 1fr 1fr',
    alignItems: 'center',
    alignContent: 'center',
    columnGap: '20px'
}));

export const UserPageStyledCont2 = styled("div")(() => ({
    padding: '0 5vw'
}));

export const UserPageStyledQuit = styled(Link)(() => ({
    fontFamily: 'Open Sans',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '300',
    textDecoration: 'none',
    color: '#f1f1f1',
}));

export const ProfileMyAIStyled = styled("div")(() => ({
    height: '100%',
    width: '100vw',
    
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '0px',
    rowGap: '50px',
    
    justifyItems: 'center',
}));

export const ProfileH1 = styled(StyledH1)(() => ({
    padding: '0 5vw',
    marginBottom: '100px',
}));