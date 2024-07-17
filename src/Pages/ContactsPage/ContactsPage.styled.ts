import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContactsPageStyled = styled("div")(() => ({
    height: '50vh',
    padding: '25vh 10vw',
}));

export const ContactsPageStyledTitle = styled("h1")(() => ({
    fontFamily: 'sans-serif, Proxima Nova',
    fontWeight: 'calc(27vw + 49vh)',
    fontSize: 'calc(3vh + 1.7vw)',
    color: 'rgba(241, 241, 241, 1)',
    lineHeight: 'calc(3vh + 1.7vw)',
    paddingBottom: '10vh',
}));

export const ContactsPageStyledLinks = styled("div")(() => ({
    display: 'grid',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridTemplateColumns: '0.1fr 1fr',
    columnGap: '1vw',
    rowGap: '3vh',
    width: '300px',
    alignItems: 'center',
}));

export const ContactsPageStyledLink = styled(Link)(() => ({
    fontFamily: 'sans-serif, Proxima Nova',
    fontWeight: '28px',
    fontSize: '20px',
    color: 'rgba(241, 241, 241, 1)',
    lineHeight: '28px',
    textDecoration: 'none',
    width: 'auto'
}));

export const ContactsPageStyledImg = styled("img")(() => ({
    zIndex: '-99',
    marginLeft: '40vw',
    marginTop: '-500px',
    width: '1000px',
}));

export const ContactsPageStyledLogoImg = styled("img")(() => ({
    width: '1.5vw',
}));