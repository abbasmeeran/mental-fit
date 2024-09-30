import { combineReducers } from "redux";
import mentalStats from "./mentalStatsReducer";
import userContext from "./userReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  mentalStats,
  userContext,
  apiCallsInProgress,
});

export default rootReducer;
