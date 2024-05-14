import{
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_VERIFY_REQUEST,
    SIGNUP_VERIFY_SUCCESS,
    SIGNUP_VERIFY_FAIL,
    CLEAR_ERRORS
}from '../constant/UserConstant'



export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case SIGNUP_REQUEST:
      case SIGNUP_VERIFY_REQUEST:
        return {
          loading: true,
          isAuthenticated: false,
        };
      case SIGNUP_SUCCESS:
      case SIGNUP_VERIFY_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
        };
      case SIGNUP_FAIL:
      case SIGNUP_VERIFY_FAIL:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          user: null,
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

 

  
export const verifyReducer = (state = { users: {} }, action) => {
  switch (action.type) {
    case SIGNUP_VERIFY_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case SIGNUP_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        result: action.payload,
      };
    case SIGNUP_VERIFY_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
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

