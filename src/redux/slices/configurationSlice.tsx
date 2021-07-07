import { createSlice } from "@reduxjs/toolkit";
import { IConfigurations } from "../../interfaces/configurations";

const initialState: { data: IConfigurations[] | [] } = {
  data: [],
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    fillData: (state: any, action) => {
      state.data = action.payload;
    },
  },
});

export const { fillData } = configurationSlice.actions;

export const configurationReducer = configurationSlice.reducer;
