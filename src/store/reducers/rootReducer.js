import {combineReducers} from "redux";
import { intlReducer } from 'react-intl-redux'
import authReducer from "./authReducer";


export default combineReducers({
  // mainReducer: mainReducer,
  intl: intlReducer,
  auth: authReducer
})
