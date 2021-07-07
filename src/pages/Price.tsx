import { CenterContainer } from "../styles/GlobalStyles";
import { PriceForm } from "../components";
import { CardContainer } from "../containers/Card/CardContainer";
import { useSteps } from "../hooks/useSteps";
import { useEffect } from "react";

export const Price = () => {
  const { checkRoute } = useSteps();
  useEffect(() => {
    checkRoute();
  }, []);
  return (
    <CenterContainer>
      <CardContainer>
        <PriceForm />
      </CardContainer>
    </CenterContainer>
  );
};
