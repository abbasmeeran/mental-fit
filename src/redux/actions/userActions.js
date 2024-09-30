import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loginSuccess(user) {
  return { type: types.LOGIN_USER_SUCCESS, user };
}

export function loadProfileSuccess(profile) {
  return { type: types.LOAD_PROFILE_SUCCESS, profile };
}

export function logoutUser(user) {
  return { type: types.LOGOUT_USER, user };
}

export function loadProfile(token) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userApi
      .getProfile(token)
      .then((profile) => {
        dispatch(loadProfileSuccess(profile));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function login(user) {
  localStorage.setItem("access_token", user?.access_token);
  return function (dispatch) {
    dispatch(loginSuccess(user));
  };
}

export function logout() {
  localStorage.removeItem("access_token");
  return function (dispatch) {
    dispatch(logoutUser());
  };
}
