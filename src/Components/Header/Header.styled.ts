import styled from "styled-components";

export const StyledHeader = styled('div')(({theme}) => ({
    width: '100vw',
    height: '15vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '10vw',
    position: 'absolute',
}))

export const HeaderLogoStyled = styled('img')(({theme}) => ({
    width: '300px'
}))

export const HeaderLinksStyled = styled('div')(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: '6.5vw',
    textAlign: 'center',
}))

export const HeaderSignLinksStyled = styled('div')(({theme}) => ({
    display: 'flex',
    columnGap: '5px',
    alignItems: 'center',
    fontSize: 'calc(1vh + 0.5vw)',
    color: '#f1f1f1',
}))
