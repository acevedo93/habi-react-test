import styled from "styled-components";

interface IAppWrapper {
  img: string;
}

export const AppWrapper = styled.div<IAppWrapper>`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
