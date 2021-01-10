import {
  GET_POSTS_FAIL,
  GET_POSTS_LOAD,
  GET_POSTS_SUCCESS,
  POST_POST,
  GET_POST,
} from "../const/post";
import axios from "axios";
export const getposts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_LOAD });
  try {
    let result = await axios.get("/user/post");
    dispatch({ type: GET_POSTS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_POSTS_FAIL, payload: error });
  }
};

export const deletepost = (id) => (dispatch) => {
   const options = {
     headers: {
       authorization: localStorage.getItem("token"),
     },
   };
  axios
    .delete(`/user/post/${id}`, options)
    .then((res) => dispatch(getposts()))
    .catch((err) => console.log(err));
};

export const getpost = (id) => async (dispatch) => {
  await axios
    .get(`/user/post/${id}`)
    .then((res) => dispatch({ type: GET_POST, payload: res.data.response }))
    .catch((err) => console.log(err));
};

export const postPost = (post) => async (dispatch) => {
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  await axios
    .post("/user/post", post, options)
    .then((res) => dispatch(getposts()))
    .catch((err) => console.log(err));
};

export const editpost = (id, post) => async (dispatch) => {
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  await axios
    .put(`/user/post/${id}`, post, options)
    .then((res) => dispatch(getposts()))
    .catch((err) => console.log(err));
};
