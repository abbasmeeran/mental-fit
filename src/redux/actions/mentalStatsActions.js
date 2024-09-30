import * as types from "./actionTypes";
import * as mentalStatsApi from "../../api/mentalStatsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadMentalStatsSuccess(mentalStats) {
  return { type: types.LOAD_MENTAL_STATS_SUCCESS, mentalStats };
}

export function createMentalStatsuccess(mentalStats) {
  return { type: types.CREATE_MENTAL_STATS_SUCCESS, mentalStats };
}

export function updateMentalStatsSuccess(mentalStats) {
  return { type: types.UPDATE_MENTAL_STATS_SUCCESS, mentalStats };
}

export function deleteMentalStatsOptimistic(mentalStats) {
  return { type: types.DELETE_MENTAL_STATS_OPTIMISTIC, mentalStats };
}

export function loadMentalStats() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return mentalStatsApi
      .getMentalStats()
      .then((mentalStats) => {
        dispatch(loadMentalStatsSuccess(mentalStats));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveMentalStats(mentalStats) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return mentalStatsApi
      .saveMentalStats(mentalStats)
      .then((mentalStats) => {
        mentalStats.id
          ? dispatch(updateMentalStatsSuccess(mentalStats))
          : dispatch(createMentalStatsuccess(mentalStats));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteMentalStats(mentalStats) {
  return function (dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteMentalStatsOptimistic(mentalStats));
    return mentalStatsApi.deleteMentalStats(mentalStats.id);
  };
}
