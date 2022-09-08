import {combineReducers, legacy_createStore} from "redux";
import authReducer from "./reducers/authReducer";
import {appReducer} from "./reducers/appReducer";
import {profileReducer} from "./reducers/profileReducer";
import {resetPasswordReducer} from "./reducers/resetPasswordReducer";



const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    profile: profileReducer,
    password: resetPasswordReducer
})

export const store = legacy_createStore(rootReducer);



