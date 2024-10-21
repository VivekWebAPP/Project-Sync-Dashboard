import { thunk } from "redux-thunk";
import combinedReducer from "./Reducers/index.js";
import { configureStore, Tuple } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: combinedReducer,
  middleware: () => new Tuple(thunk),
});

export default store;