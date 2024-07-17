import styled from "styled-components";

export const AdminUserPageStyled = styled("div")(() => ({
    padding: '20vh 5vw'
}));

export const TableStyled = styled("table")(() => ({
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    fontFamily: 'Open Sans',
    fontSize: '20px',
    lineHeight: '20px',
    fontWeight: '400',
    color: '#f1f1f1',
}));

export const TableRowStyled = styled("tr")(() => ({
    borderBottom: '1px solid #ccc',
}));

export const TableCellStyled = styled("td")(() => ({
    padding: '10px',
    textAlign: 'left',
    border: '1px solid #ccc',
    
}));

export const TableHeaderStyled = styled("th")(() => ({
    padding: '10px',
    textAlign: 'left',
    border: '1px solid #ccc',
    backgroundColor: '#f5f5f5',
}));

export const AdminUserCont = styled("div")(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between"
}));