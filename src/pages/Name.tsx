import { CenterContainer } from "../styles/GlobalStyles";
import { NameForm } from "../components";
import { CardContainer } from "../containers/Card/CardContainer";
import { useSteps } from "../hooks/useSteps";
import { useEffect } from "react";

export const Name = () => {
  const { checkRoute } = useSteps();
  useEffect(() => {
    checkRoute();
  }, []);
  return (
    <CenterContainer>
      <CardContainer>
        <NameForm />
      </CardContainer>
    </CenterContainer>
  );
};
