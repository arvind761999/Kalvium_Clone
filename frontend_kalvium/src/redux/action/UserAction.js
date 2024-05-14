import{
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_VERIFY_REQUEST,
    SIGNUP_VERIFY_SUCCESS,
    SIGNUP_VERIFY_FAIL,
    CLEAR_ERRORS
}from '../constant/UserConstant'

import axios from 'axios'

export const signup = (myform) => async (dispatch) => {
    // alert('hello')
    console.log(myform)
    try {
        dispatch({ type: SIGNUP_REQUEST })

        const config = {
            headers: {
                'content-type': 'multiparts/form-data'
            }
        }
        const { data } = await axios.post('/signup', myform, config);
        console.log(data);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: data.result
        })
    } catch (error) {
        dispatch({
            type: SIGNUP_FAIL,
            payload: error.response.data
        });
    }
}


export const login_user = (myform) => async (dispatch) => {
    try {
        // console.log(number,otp)
        dispatch({ type: SIGNUP_VERIFY_REQUEST })
        console.log(myform)
        // const config = {
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // }
        const {data} = await axios.post('/signupverify',myform);
        console.log(data.data);
        dispatch({
            type: SIGNUP_VERIFY_SUCCESS,
            payload: data.result
        })
    } catch (error) {
        dispatch({
            type: SIGNUP_VERIFY_FAIL,
            payload: error.response.data
        });
    }
}

// for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
