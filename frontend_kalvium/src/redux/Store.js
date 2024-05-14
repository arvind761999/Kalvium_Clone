import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer, verifyReducer } from "./reducer/UserReducer";
import { enquireReducer } from "./reducer/EnquireReducer";
import { newOrderReducer } from "./reducer/RegisterReducer";
import { applyReducer } from "./reducer/ApplyReducer";

const reducer = combineReducers({
    auth:authReducer,
    user:verifyReducer,
    enquire:enquireReducer,
    newRegister:newOrderReducer,
    apply:applyReducer,
})


let intialState = {

}


// create store
const store = createStore(
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  export default store;
  