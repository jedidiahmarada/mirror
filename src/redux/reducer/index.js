import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registersReducer from "./registersReducer";

export const rootRedcers = combineReducers({
  login: loginReducer,
  registers: registersReducer,
});
