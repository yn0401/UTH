import {
  getAll,
  getByID,
  addNew,
  update,
  deleteTransaction,
} from "../actions/transactionAction";

const initialState = {
  transactions: [],
  transaction: {},
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case getAll:
      return {
        ...state,
        transactions: action.payload,
      };
    case getByID:
      return {
        ...state,
        transaction: action.payload,
      };
    case addNew:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case update:
      return {
        ...state,
      };
    case deleteTransaction:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
};
