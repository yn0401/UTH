import { getAll} from "../actions/gift";

// , add, update, getDetail,search,deleteOne 
const initialState = {
    gifts: [],
    // item: {},
};

export const giftReducer = (state = initialState, action) => {
  switch (action.type) {
    case getAll:
      console.log("Get All", action.payload);
      return {
        ...state,
        gifts: [...action.payload],
      };
    // case add:
    //   console.log("Add", action.payload);
    //   return {
    //     ...state,
    //     gifts: [...state.gifts, action.payload],
    //   };
    // case update:
    //   console.log("Update", action.payload);
    //   return {
    //     ...state,
    //   };
    // case getDetail:
    //   // console.log("getDetail", action.payload);
    //   return {
    //     ...state,
    //     item: action.payload,
    //   };
    // case deleteOne:
    //   console.log("Delete", action.payload);
    //   return {
    //     ...state,
    //     gifts: state.gifts.filter((item) => item.id !== action.payload),
    //   };
    // case search:
    //   return {
    //     ...state,
    //     gifts: [...action.payload],
    //   };
    default:
      return { ...state };
  }
};

export default giftReducer;