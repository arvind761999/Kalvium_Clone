import {
  APPLY_REQUEST,
  APPLY_SUCCESS,
  APPLY_FAIL,
  CLEAR_ERRORS
} from "../constant/ApplyConstant";


import axios from 'axios'

export const apply = (myform) => async (dispatch) => {
    // alert('hello')
    console.log(myform)
    try {
        dispatch({ type: APPLY_REQUEST })

        const config = {
            headers: {
                'content-type': 'multiparts/form-data'
            }
        }
        const { data } = await axios.post('/apply', myform, config);
        console.log(data);
        dispatch({
            type: APPLY_SUCCESS,
            payload: data.data
        })
    } catch (error) {
        dispatch({
            type: APPLY_FAIL,
            payload: error.response.data
        });
    }
}

// for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
