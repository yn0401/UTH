import {
  getAll,
  getByID,
  addNew,
  update,
  deleteOne,
} from "../actions/eventAction";

const initialState = {
  events: [],
  event: {},
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case getAll:
      return {
        ...state,
        events: action.payload,
      };
    case getByID:
      return {
        ...state,
        event: action.payload,
      };
    case addNew:
      return {
        ...state,
        events: [action.payload, ...state.events],
      };
    case update:
      return {
        ...state,
      };
    case deleteOne:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    default:
      return { ...state };
  }
};
