import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Router } from "./router/Router";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { AppContainer } from "./containers/App/AppContainer";

let persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppContainer>
            <Router />
          </AppContainer>
        </ThemeProvider>
      </PersistGate>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
