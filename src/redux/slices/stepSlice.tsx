import { createSlice } from "@reduxjs/toolkit";

import { IConfigurations } from "../../interfaces/configurations";
interface IinitialState {
  currentStep: { order: number; path: string };
  nextStep: { order: number; path: string };
  historySteps: [] | [{ complete: boolean; path: string; order: number }];
}

const initialState: IinitialState = {
  currentStep: { order: 0, path: "/" },
  nextStep: { order: 0, path: "/" },
  historySteps: [],
};

export const stepsSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setCurrentStep: (
      state: IinitialState,
      action: { payload: IConfigurations }
    ) => {
      const order = action.payload.order;
      const path = action.payload.path;
      state.currentStep = { order, path };
    },
    setNextStep: (
      state: IinitialState,
      action: { payload: IConfigurations }
    ) => {
      const order = action.payload.order;
      const path = action.payload.path;
      state.nextStep = { order, path };
    },
    updateHistory: (state: IinitialState, action) => {
      state.historySteps = action.payload;
    },
  },
});

export const { setCurrentStep, setNextStep, updateHistory } =
  stepsSlice.actions;

export const stepsReducer = stepsSlice.reducer;
