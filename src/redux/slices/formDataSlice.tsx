import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fullName: "",
  email: "",
  floor: "",
  areas: [],
  price: "",
  parkingLot: {
    userHas: false,
    covered: false,
  },
  picture: "",
  lift: false,
  lastStep: false,
};

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    add: (state: any, action) => {
      const value = action.payload.value;
      const stepName = action.payload.stepName;
      state[stepName] = value;
    },
  },
});

export const { add } = formDataSlice.actions;

export const formDataReducer = formDataSlice.reducer;
