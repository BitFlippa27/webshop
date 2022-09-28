import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
  }
`
