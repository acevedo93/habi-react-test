import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillData } from "../redux/slices/configurationSlice";
import { RootState } from "../redux/store";
import { getConfiguration } from "../services/remoteConfig";

export const useRemoteConfig = () => {
  const dispatch = useDispatch();
  const configurations = useSelector(
    (state: RootState) => state.configuration.data
  );
  useEffect(() => {
    if (!configurations.length) {
      loadConfigurations();
    }
  });
  const loadConfigurations = () => {
    const configurations = getConfiguration();
    if (configurations?.length) {
      dispatch(fillData(configurations));
    }
  };

  const getInitialStep = () => {
    return configurations.filter((step) => step.order === 1)[0];
  };

  return {
    configurations,
    initialStep: getInitialStep(),
  };
};
