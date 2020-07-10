import { combineReducers } from "redux";
import authReducer from "./authReducer";
import viewShow from "./showReducer";
import watchlist from "./watchlistReducer"


export default combineReducers({
  auth: authReducer,
  viewShow: viewShow,
  watchlist: watchlist
});