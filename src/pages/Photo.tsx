import { CenterContainer } from "../styles/GlobalStyles";
import { PhotoForm } from "../components";
import { CardContainer } from "../containers/Card/CardContainer";
import { useEffect } from "react";
import { useSteps } from "../hooks/useSteps";

export const Photo = () => {
  const { checkRoute } = useSteps();
  useEffect(() => {
    checkRoute();
  }, []);
  return (
    <CenterContainer>
      <CardContainer>
        <PhotoForm />
      </CardContainer>
    </CenterContainer>
  );
};
