import { CardContainer } from "../containers/Card/CardContainer";
import { CenterContainer } from "../styles/GlobalStyles";
import { LiftForm } from "../components";
import { useSteps } from "../hooks/useSteps";
import { useEffect } from "react";

export const Lift = () => {
  const { checkRoute } = useSteps();
  useEffect(() => {
    checkRoute();
  }, []);
  return (
    <CenterContainer>
      <CardContainer>
        <LiftForm />
      </CardContainer>
    </CenterContainer>
  );
};
