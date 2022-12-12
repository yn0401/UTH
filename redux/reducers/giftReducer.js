import {
  getAll,
  getLatest,
  getNewest,
  getWithPointASC,
  getWithPointDESC,
  getByID,
  addNew,
  update,
  deleteGift,
  search,
} from "../actions/giftAction";

const initialState = {
  gifts: [],
  gift: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case getAll:
      return {
        ...state,
        gifts: action.payload,
      };
    case getLatest:
      return {
        ...state,
        gifts: action.payload,
      };
    case getNewest:
      return {
        ...state,
        gifts: action.payload,
      };
    case getWithPointASC:
      return {
        ...state,
        gifts: action.payload,
      };
    case getWithPointDESC:
      return {
        ...state,
        gifts: action.payload,
      };
    case getByID:
      return {
        ...state,
        gift: action.payload,
      };
    case addNew:
      return {
        ...state,
        gifts: [action.payload, ...state.gifts],
      };
    case update:
      return {
        ...state,
      };
    case deleteGift:
      return {
        ...state,
        gifts: state.gifts.filter((gift) => gift.id !== action.payload),
      };
    case search:
      return {
        ...state,
        gifts: [...action.payload],
      };
    default:
      return { ...state };
  }
}
