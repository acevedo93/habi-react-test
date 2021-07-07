import styled from "styled-components";

export const ProgressWrapper = styled.ol``;

export const Steps = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightShade};
`;

export const Step = styled.div<{ type: "inactive" | "active" | "success" }>`
  margin: 0.5rem 3rem;
  display: flex;
  flex-direction: column;

  a {
    color: ${({ theme, type }) =>
      type === "success" || type === "active"
        ? theme.colors.success
        : theme.colors.primary};
    text-decoration: none;
  }
`;

export const StepCircle = styled.div`
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-right: 0.5rem;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
