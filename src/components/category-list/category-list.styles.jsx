import styled from "styled-components";

export const CategoryListContainer = styled.div`
  width: 100%; 
  display: flex; 
  flex-wrap: wrap; 
  justify-content: space-between; 

  @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 20px;
    row-gap: 50px;
  }
`