import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export const CardWrapper = styled(Container)`
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.21);
  border-radius: 26px;
  min-height: 300px;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 20px rgba(24, 32, 46, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid #7765fa;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const CardContent = styled.div``;
