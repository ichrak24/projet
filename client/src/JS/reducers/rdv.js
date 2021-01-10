import {
  REGISTER_RDV,
  LOAD_RDV,
  GET_Rdvs_LOAD,
  GET_Rdvs_FAIL,
  GET_Rdvs_SUCCESS,
} from "../const/rdv";

const initialState = {
  rdvs: [],
  rdv: {},
  loadRdv: false,
  errors: null,
  isAuth: false,
};
export const rdvReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_RDV:
      localStorage.setItem("token", payload.token);
      return { ...state, loadRdv: false, rdv: payload.rdv, isAuth: true };

    case LOAD_RDV:
      return { ...state, loadRdv: true };
    case GET_Rdvs_LOAD:
      return { ...state, loadRdv: true };
    case GET_Rdvs_SUCCESS:
      return { ...state, rdvs: payload, loadRdv: false };
    case GET_Rdvs_FAIL:
      return { ...state, loadRdv: false, errors: payload };

    default:
      return state;
  }
};
