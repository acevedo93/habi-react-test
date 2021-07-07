import { useEffect } from "react";
import { AreasForm } from "../components";
import { CardContainer } from "../containers/Card/CardContainer";
import { useSteps } from "../hooks/useSteps";
import { CenterContainer } from "../styles/GlobalStyles";

export const Areas = () => {
  const { checkRoute } = useSteps();
  useEffect(() => {
    checkRoute();
  }, []);
  return (
    <CenterContainer>
      <CardContainer>
        <AreasForm />
      </CardContainer>
    </CenterContainer>
  );
};
