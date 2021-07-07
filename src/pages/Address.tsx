import { useEffect } from "react";
import { AddressForm } from "../components";
import { CardContainer } from "../containers/Card/CardContainer";
import { useSteps } from "../hooks/useSteps";
import { CenterContainer } from "../styles/GlobalStyles";
export const Address = () => {
  const { checkRoute } = useSteps();
  useEffect(() => {
    checkRoute();
  }, []);
  return (
    <CenterContainer>
      <CardContainer>
        <AddressForm />
      </CardContainer>
    </CenterContainer>
  );
};
