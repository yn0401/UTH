import {
  getAll,
  getTop10,
  getByID,
  addNew,
  update,
  deleteMember,
  searchMember,
} from "../actions/memberAction";

const initialState = {
  members: [],
  member: {},
  top10Members: [],
  searchMembers: [],
};

export const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    case getAll:
      return {
        ...state,
        members: action.payload,
      };
    case getTop10:
      return {
        ...state,
        top10Members: action.payload,
      };
    case getByID:
      return {
        ...state,
        member: action.payload,
      };
    case addNew:
      return {
        ...state,
        members: [...state.members],
      };
    case update:
      return {
        ...state,
      };
    case deleteMember:
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.payload),
      };
    case searchMember:
      return {
        ...state,
        members: [...action.payload],
      };
    default:
      return { ...state };
  }
};
