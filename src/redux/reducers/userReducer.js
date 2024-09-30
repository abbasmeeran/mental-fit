import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(
  state = initialState.userContext,
  action
) {
  switch (action.type) {
    case types.LOGOUT_USER:
      return null;
    case types.LOGIN_USER_SUCCESS:
      return { ...state, user: action.user };
    case types.LOAD_PROFILE_SUCCESS:
      return { ...state, profile: action.profile };

    default:
      return state;
  }
}
