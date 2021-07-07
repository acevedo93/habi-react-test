import { CenterContainer } from "../styles/GlobalStyles";
import { ParkingLotForm } from "../components";
import { CardContainer } from "../containers/Card/CardContainer";
import { useSteps } from "../hooks/useSteps";
import { useEffect } from "react";

export const ParkingLot = () => {
  const { checkRoute } = useSteps();
  useEffect(() => {
    checkRoute();
  }, []);
  return (
    <CenterContainer>
      <CardContainer>
        <ParkingLotForm />
      </CardContainer>
    </CenterContainer>
  );
};
