import { combineReducers } from "redux";
import { apiSlice } from "./createAppSlice";

const combinedReducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer
});

export default function rootReducer(state, action) {
  let { type } = action;

  switch (type) {
    case "auth/logout":
      return combinedReducers(undefined, action);

    default:
      return combinedReducers(state, action);
  }
}
