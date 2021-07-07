import styled, { css } from "styled-components";
import { SubTitle } from "./Fonts";

const sharedStyles = css`
  background-color: transparent;
  height: 40px;
  border-radius: 5px;
  border-bottom: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px 20px 5px 20px;
  height: 100%;
  font-size: 1.2rem;
`;

export const Form = styled.form``;

export const FormGroup = styled.div``;

export const Label = styled(SubTitle)``;

export const Input = styled.input`
  display: block;
  width: 100%;

  ${sharedStyles}
  :active {
    border-bottom: 1px solid #ddd;
  }
`;

export const Select = styled.select`
  display: block;
  width: 30%;
  ${sharedStyles}
`;
export const ErrorForm = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const CheckBoxWrapper = styled.div``;
