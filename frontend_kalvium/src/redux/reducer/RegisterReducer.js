import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS
  } from "../constant/RegisterConstant";

  export const newOrderReducer = (state = {}, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case REGISTER_SUCCESS:
        return {
          loading: false,
          order: action.payload,
        };
      case REGISTER_FAIL:
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
