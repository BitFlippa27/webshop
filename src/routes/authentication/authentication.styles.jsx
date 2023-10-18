import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;


  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    align-items: center;
  }
`
export const AuthLink = styled.p`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`
export const H2Title = styled.h2 `
  padding: 30px 10px 10px 0px;
`
