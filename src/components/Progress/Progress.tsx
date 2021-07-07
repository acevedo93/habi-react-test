import { StepCircle, Step, Steps } from "./Progress.styles";
import { withRouter, Link } from "react-router-dom";
import { useSteps } from "../../hooks/useSteps";
import { P } from "../../styles/Fonts";
import { IoIosDoneAll } from "react-icons/io";
import { IConfigurations } from "../../interfaces/configurations";

export const Progress = withRouter(({ location: { pathname } }) => {
  const { configurations, currentStep, historySteps } = useSteps();

  const checkIsOnHistory = (config: IConfigurations) => {
    return historySteps.filter((step) => step.path === config.path).length;
  };

  return (
    <Steps>
      {configurations.map((config, index) => {
        if (checkIsOnHistory(config)) {
          return (
            <Step key={index} type="success">
              <Link to={config.path}>
                <StepCircle>
                  <IoIosDoneAll />
                </StepCircle>
                <P>{config.label}</P>
              </Link>
            </Step>
          );
        }
        if (currentStep.path === config.path) {
          return (
            <Step key={index} type="active">
              <Link to={config.path}>
                <StepCircle>{config.order}</StepCircle>
                <P>{config.label}</P>
              </Link>
            </Step>
          );
        }
        return (
          <Step key={index} type="inactive">
            <StepCircle>{config.order}</StepCircle>
            <P>{config.label}</P>
          </Step>
        );
      })}
    </Steps>
  );
});
