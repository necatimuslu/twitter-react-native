import { LOGIN, LOGOUT } from "../constants/authConstants";

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return (state = null);
    default:
      return state;
  }
};
