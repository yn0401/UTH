import { createStore, combineReducers } from "redux";
import { eventReducer } from "./eventReducer";
import giftReducer from "./giftReducer";
import { memberReducer } from "./memberReducer";
import { transactionReducer } from "./transactionReducer";

export const rootReducer = combineReducers({
  members: memberReducer,
  gifts: giftReducer,
  transactions: transactionReducer,
  events: eventReducer,
});
