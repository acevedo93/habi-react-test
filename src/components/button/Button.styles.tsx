import styled, { DefaultTheme } from "styled-components";

interface IButtonWrapper {
  size?: "big" | "small";
  disabled: boolean;
}

export const ButtonWrapper = styled.button<IButtonWrapper>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.lightShade : theme.colors.primary};
  border-radius: 24px;
  white-space: nowrap;
  padding: ${({ size }) => (size === "big" ? "10px 50px" : "10px 20px")};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.dark : theme.colors.light};
  font-size: 20px;
  cursor: pointer;

  border: 1px solid black;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
