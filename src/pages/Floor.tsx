import { useEffect } from "react";
import { FloorForm } from "../components";
import { CardContainer } from "../containers/Card/CardContainer";
import { useSteps } from "../hooks/useSteps";
import { CenterContainer } from "../styles/GlobalStyles";

export const Floor = () => {
  const { checkRoute } = useSteps();
  useEffect(() => {
    checkRoute();
  }, []);
  return (
    <CenterContainer>
      <CardContainer>
        <FloorForm />
      </CardContainer>
    </CenterContainer>
  );
};
