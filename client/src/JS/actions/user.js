import {
  LOAD_USER,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  FAIL_USER,
  SUCCESS_USER,
  GET_Users_LOAD,
  GET_Users_SUCCESS,
  GET_Users_FAIL,
  GET_USER,
  CURRENT_USER,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../const/user";
import axios from "axios";

export const registerUser = (user, history) => async (dispatch) => {
  dispatch({
    type: LOAD_USER,
  });
  try {
    const result = await axios.post("/user/register", user); // {user , msg , token}
    //localStorage.setItem("token" , result.data.token)
    dispatch({ type: REGISTER_USER, payload: result.data });
    {
      result.data.user.role === "psy"
        ? history.push("/dashbordpsy")
        : history.push("/dashbordpatient");
    }
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    if (msg) {
      alert(msg);
    }
  }
};

export const loginUser = (user, history) => async (dispatch) => {
  dispatch({
    type: LOAD_USER,
  });
  try {
    const result = await axios.post("/user/login", user); // {user , msg , token}
    dispatch({ type: LOGIN_USER, payload: result.data });
    console.log(result.data);
    if (result.data.user.role === "psy") {
      history.push("/dashbordPsy");
    } else if (result.data.user.role === "admin") {
      history.push("/DashboardAdmin");
    } else {
      history.push("/dashbordpatient");
    }
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
  }
};

export const current = () => async (dispatch) => {
  dispatch({
    type: LOAD_USER,
  });
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/user/current", options);

    // user
    dispatch({ type: CURRENT_USER, payload: result.data.user });
  } catch (error) {
    dispatch({
      type: FAIL_USER,
      payload: error.response.data,
    });
  }
};

export const getUsers = (role) => async (dispatch) => {
  dispatch({ type: GET_Users_LOAD });
  try {
    let result = await axios.get(`/user/alluser/${role}`);
    dispatch({ type: GET_Users_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_Users_FAIL, payload: error });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/user/user/${id}`);
    console.log(result);
    dispatch({ type: GET_USER, payload: result.data.response });
  } catch (error) {
    console.log(error);
  }
};

export const ajouterUser = (user) => async (dispatch) => {
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  await axios
    .post("/user/user", user, options)
    .then((res) => dispatch(getUsers()))
    .catch((err) => console.log(err));
};

export const editUser = (id, user) => async (dispatch) => {
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  await axios
    .put(`/user/user/${id}`, user, options)
    .then((res) => dispatch(getUsers()))
    .catch((err) => console.log(err));
};

export const toggleTrue = () => {
  return { type: TOGGLE_TRUE };
};

export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const deleteUser = (id) => (dispatch) => {
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  axios
    .delete(`/user/user/${id}`, options)
    .then((res) => dispatch(getUsers()))
    .catch((err) => console.log(err));
};
