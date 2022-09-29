import styled from "styled-components";

export const AuthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 50px;


  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    align-items: center;
  }
`
