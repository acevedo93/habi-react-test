import { IContainer } from "../../interfaces/container";
import { CardContent, CardWrapper } from "./Card.styles";

export const CardContainer = ({ children }: IContainer) => {
  return (
    <CardWrapper>
      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
};
