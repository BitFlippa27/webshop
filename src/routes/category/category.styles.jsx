import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
    
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 35px;
    grid-row-gap: 50px;
    align-items: center;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    align-items: center;
  }

`

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`
