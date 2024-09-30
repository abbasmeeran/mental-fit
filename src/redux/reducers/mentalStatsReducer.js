import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(
  state = initialState.mentalStats,
  action
) {
  switch (action.type) {
    case types.CREATE_MENTAL_STATS:
      return [...state, { ...action.mentalStats }];
    case types.UPDATE_MENTAL_STATS_SUCCESS:
      return state.map((mentalStats) =>
        mentalStats.id === action.mentalStats.id
          ? action.mentalStats
          : mentalStats
      );
    case types.LOAD_MENTAL_STATS_SUCCESS:
      return action.mentalStats;
    case types.DELETE_MENTAL_STATS_OPTIMISTIC:
      return state.filter((course) => course.id !== action.course.id);
    default:
      return state;
  }
}
