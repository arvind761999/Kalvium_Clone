import {
  ENQUIRE_REQUEST,
  ENQUIRE_SUCCESS,
  ENQUIRE_FAIL,
  CLEAR_ERRORS
} from "../constant/EnquireConstant";

import axios from 'axios'

export const enquire = (myform) => async (dispatch) => {
    // alert('hello')
    console.log(myform)
    try {
        dispatch({ type: ENQUIRE_REQUEST })

        const config = {
            headers: {
                'content-type': 'multiparts/form-data'
            }
        }
        const { data } = await axios.post('/enquirecreate', myform, config);
        console.log(data);
        dispatch({
            type: ENQUIRE_SUCCESS,
            payload: data.data
        })
    } catch (error) {
        dispatch({
            type: ENQUIRE_FAIL,
            payload: error.response.data
        });
    }
}

// for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
