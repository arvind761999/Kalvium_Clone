import {
    APPLY_REQUEST,
    APPLY_SUCCESS,
    APPLY_FAIL,
    CLEAR_ERRORS
  } from "../constant/ApplyConstant";
  
  export const applyReducer = (state = { apply: {} }, action) => {
    switch (action.type) {
      case APPLY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case APPLY_SUCCESS:
        return {
          loading: false,
          apply: action.payload,
        };
      case APPLY_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
     
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };