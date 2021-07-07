import { FinalForm } from "../components";
import { CardContainer } from "../containers/Card/CardContainer";
import { useSteps } from "../hooks/useSteps";
import { CenterContainer } from "../styles/GlobalStyles";

export const FinalStep = () => {
  const { checkRoute } = useSteps();

  return (
    <CenterContainer>
      <CardContainer>
        <FinalForm />
      </CardContainer>
    </CenterContainer>
  );
};
