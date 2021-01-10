import {
  LOAD_USER,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  FAIL_USER,
  CURRENT_USER,
  GET_Users_SUCCESS,
  GET_USER,
} from "../const/user";

const initialState = {
  users: [],
  user: null,
  oneuser: {},
  loadUser: false,
  errors: null,
  isAuth: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case LOAD_USER:
      return { ...state, loadUser: true };
    case CURRENT_USER:
      localStorage.getItem("token", payload.token);
      return { ...state, loadUser: false, isAuth: true, user: payload };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        user: null,
        loadUser: false,
        errors: null,
        isAuth: false,
      };
    case GET_Users_SUCCESS:
      return { ...state, users: payload, loadPosts: false };
    case GET_USER:
      return { ...state, oneuser: payload, loadPosts: false };
    default:
      return state;
  }
};
