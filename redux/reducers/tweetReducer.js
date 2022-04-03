import {
  GET_ALL_TWEET,
  CREATE_TWEET,
  UPDATE_TWEET,
  DELETE_TWEET,
} from "../constants/tweetCostants";

export const tweetReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_TWEET:
      return action.payload;
    case CREATE_TWEET:
      return [...state, action.payload];
    case UPDATE_TWEET:
      return state.map((t) =>
        t._id === action.payload._id ? action.payload : t
      );
    case DELETE_TWEET:
      return state.filter((t) => t._id !== action.payload);
    default:
      return state;
  }
};
