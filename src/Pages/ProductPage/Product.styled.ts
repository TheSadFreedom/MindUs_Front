import styled from "styled-components";

export const ProductPageStyled = styled('div')(() => ({
    display: 'flex',
}))

export const ProductPageStyledCont0 = styled('div')(() => ({
    margin: '20vh 5vw',
    display: 'grid',
    gridTemplateColumns: '1fr 0.5fr',

    height: '100%',
    width: '90vw',

    border: '1px solid white',
    borderRadius: '10px',
}))

export const ProductPageStyledCont1 = styled('div')(() => ({
    padding: '5vh',
}))

export const ProductPageStyledCont2 = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: '5vw',
}))

