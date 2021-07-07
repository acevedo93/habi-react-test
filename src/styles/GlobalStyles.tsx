import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Source Sans Pro',sans-serif;
}

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;

  @media screen and(max-width: 990px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const CenterContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
