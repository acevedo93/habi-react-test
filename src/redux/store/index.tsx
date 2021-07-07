import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { formDataReducer } from "../slices/formDataSlice";
import { configurationReducer } from "../slices/configurationSlice";
import { stepsReducer } from "../slices/stepSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
const reducers = combineReducers({
  steps: stepsReducer,
  formData: formDataReducer,
  configuration: configurationReducer,
});

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["configuration"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export type RootState = ReturnType<typeof reducers>;
