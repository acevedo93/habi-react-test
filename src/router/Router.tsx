import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Progress } from "../components/Progress/Progress";
import { useRemoteConfig } from "../hooks/useRemoteConfig";
import { Home } from "../pages/Home";

export const Router = () => {
  const { configurations } = useRemoteConfig();
  return (
    <BrowserRouter>
      <Progress />
      <Switch>
        <Route key={0} component={Home} path="/" exact={true} />
        {configurations.map((config) => {
          let component = require(`../pages/${config.component}`)[
            config.component
          ];

          return (
            <Route
              key={config.order}
              component={component}
              path={config.path}
              exact={true}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};
