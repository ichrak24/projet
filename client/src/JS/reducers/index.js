import { combineReducers } from "redux";

import { userReducer } from "./user";
import { editReducer } from "./edit";
import { postReducer } from "./post";
import { rdvReducer } from "./rdv";
export const rootReducer = combineReducers({
  userReducer,
  editReducer,
  postReducer,
  rdvReducer,
});
