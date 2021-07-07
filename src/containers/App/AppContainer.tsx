import { IContainer } from "../../interfaces/container";
import img from "../../assets/apartment.jpeg";
import { GlobalStyle } from "../../styles/GlobalStyles";
import { AppWrapper } from "./App.styles";
import { useRemoteConfig } from "../../hooks/useRemoteConfig";

export const AppContainer = ({ children }: IContainer) => {
  const { configurations } = useRemoteConfig();

  return (
    <AppWrapper img={img}>
      <GlobalStyle />
      {!configurations.length && <div>Cargando</div>}
      {configurations.length && children}
    </AppWrapper>
  );
};
