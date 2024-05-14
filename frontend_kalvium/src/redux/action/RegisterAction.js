import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
} from "../constant/RegisterConstant";

import axios from 'axios'

export const createOrder = (order) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/register/create", order, config);
  
      dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  // for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};