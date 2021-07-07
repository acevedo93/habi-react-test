import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { IConfigurations } from "../interfaces/configurations";
import {
  setCurrentStep,
  setNextStep,
  updateHistory,
} from "../redux/slices/stepSlice";
import { RootState } from "../redux/store";
import { useRemoteConfig } from "./useRemoteConfig";

export const useSteps = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { configurations } = useRemoteConfig();
  const { nextStep, historySteps, currentStep } = useSelector(
    (state: RootState) => state.steps
  );

  // Check actualPath and looks if is step,and handle active step
  const checkRoute = () => {
    const actualLocation = location.pathname.split("/");
    const isStep = actualLocation.includes("steps");
    if (isStep) {
      const step = actualLocation[actualLocation.length - 1];
      if (step === "final") {
        return;
      }
      return handleActiveStep(`/steps/${step}`);
    }
  };

  // update history of pages on store
  const handleHistory = () => {
    const actualHistory = [...historySteps];
    const newObjectToHistory = {
      complete: true,
      ...currentStep,
    };
    // check if object has alredy on array
    if (
      !actualHistory.filter((step) => step.path === currentStep.path).length
    ) {
      const newHistory = [...actualHistory, newObjectToHistory];
      return dispatch(updateHistory(newHistory));
    }
  };

  // Search patjh with order 1
  const goToInitialStep = () => {
    const initialStep = configurations.filter((step) => step.order === 1)[0];
    history.push(initialStep.path);
  };

  // go to nextStep and update history of pages
  const goToNextStep = () => {
    handleHistory();
    history.push(nextStep.path);
  };

  //search nextStep and set on sotre
  const handleNextStep = (component: IConfigurations): void => {
    const indexNextStep = configurations.findIndex(
      (config) => config.order === component.order + 1
    );
    dispatch(setNextStep(configurations[indexNextStep]));
  };

  //search actualpath on configurations and update store
  const handleActiveStep = (path: string) => {
    const activeComponent = configurations.filter(
      (config) => config.path === path
    )[0];
    dispatch(setCurrentStep(activeComponent));
    handleNextStep(activeComponent);
  };

  return {
    goToInitialStep,
    goToNextStep,
    checkRoute,
    location,
    configurations,
    currentStep,
    historySteps,
  };
};
