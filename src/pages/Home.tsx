import { Button } from "../components";
import { CenterContainer } from "../styles/GlobalStyles";
import { SubTitle, Title, P } from "../styles/Fonts";
import { CardContainer } from "../containers/Card/CardContainer";
import { useSteps } from "../hooks/useSteps";

export const Home = () => {
  const { goToInitialStep } = useSteps();
  return (
    <CenterContainer>
      <CardContainer>
        <Title>Bienvenido</Title>
        <SubTitle>Este es el componente de ventas</SubTitle>
        <P>Sigue los pasos siguientes para vender tu propiedad</P>
        <Button disabled onClick={goToInitialStep} label="Vender" />
      </CardContainer>
    </CenterContainer>
  );
};
