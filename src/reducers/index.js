import { combineReducers } from "redux";
import authReducer from "./authReducer";
import viewShow from "./showReducer";


export default combineReducers({
  auth: authReducer,
  viewShow: viewShow
});