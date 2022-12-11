import { giftReducer } from "./gift";
import { createStore, combineReducers } from "redux";
import { memberReducer } from "./memberReducer";

export const rootReducer = combineReducers({
  gifts: giftReducer,
  members: memberReducer
});
