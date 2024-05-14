import {
    ENQUIRE_REQUEST,
    ENQUIRE_SUCCESS,
    ENQUIRE_FAIL,
    CLEAR_ERRORS
  } from "../constant/EnquireConstant";
  
  export const enquireReducer = (state = { enquire: {} }, action) => {
    switch (action.type) {
      case ENQUIRE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ENQUIRE_SUCCESS:
        return {
          loading: false,
          enquire: action.payload,
        };
      case ENQUIRE_FAIL:
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