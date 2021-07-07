import { useEffect } from "react";
import { EmailForm } from "../components";
import { CardContainer } from "../containers/Card/CardContainer";
import { useSteps } from "../hooks/useSteps";
import { CenterContainer } from "../styles/GlobalStyles";

export const Email = () => {
  const { checkRoute } = useSteps();
  useEffect(() => {
    checkRoute();
  }, []);
  return (
    <CenterContainer>
      <CardContainer>
        <EmailForm />
      </CardContainer>
    </CenterContainer>
  );
};
