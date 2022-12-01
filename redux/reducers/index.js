import { giftReducer } from "./gift";
import { createStore, combineReducers } from "redux";

export const rootReducer = combineReducers({
  gifts: giftReducer,
});
