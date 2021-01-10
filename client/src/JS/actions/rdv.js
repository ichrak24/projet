import {
  LOAD_RDV,
  REGISTER_RDV,
  GET_Rdvs_LOAD,
  GET_Rdvs_SUCCESS,
  GET_Rdvs_FAIL,
  GET_Rdv,
} from "../const/rdv";
import axios from "axios";

//export const ajouterRdv = (rdv, history) => async (dispatch) => {
//dispatch({
//type: LOAD_RDV,
//});
//try {
//const result = await axios.post("/user/rdv", rdv); // {user , msg , token}
//localStorage.setItem("token" , result.data.token)
//dispatch({ type: REGISTER_RDV, payload: result.data });
//history.push("/fiche");
//} catch (error) {
//const { errors, msg } = error.response.data;
//if (Array.isArray(errors)) {
// errors.forEach((err) => alert(err.msg));
//}
//if (msg) {
//alert(msg);
//}
//}
//};

export const ajouterRdv = (rdv, history) => async (dispatch) => {
  dispatch({
    type: LOAD_RDV,
  });
    const options = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
  try {
    const result = await axios.post("/user/rdv", rdv , options); // {user , msg , token}
    //localStorage.setItem("token" , result.data.token)
    console.log("===========", result);
    dispatch({ type: REGISTER_RDV, payload: result.data });
    history.push("/fiche");
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

export const getRdv = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/user/rdv/${id}`);
    console.log(result);
    dispatch({ type: GET_Rdv, payload: result.data.response });
  } catch (error) {
    console.log(error);
  }
};

export const getRdvs = (id) => async (dispatch) => {
  dispatch({ type: GET_Rdvs_LOAD });
  try {
    let result = await axios.get(`/user/allrdv/${id}`);
    dispatch({ type: GET_Rdvs_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_Rdvs_FAIL, payload: error });
  }
};
