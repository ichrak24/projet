import { toggleFalse, toggleTrue } from "../actions/user";
import {TOGGLE_FALSE , TOGGLE_TRUE} from "../const/user"


const initialState = {
  edit: false
};


export const editReducer =(state=initialState , {type})=>{
    switch (type) {
        case TOGGLE_TRUE: return {...state , edit : true}

           case TOGGLE_FALSE:    return{...state , edit :false}
          
    
        default:
          return state 
    }
}