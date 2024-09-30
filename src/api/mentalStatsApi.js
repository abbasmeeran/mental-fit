import { handleResponse, handleError, securedFetch } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/logs/";

export function getMentalStats() {
  return securedFetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveMentalStats(mentalStats) {
  return securedFetch(baseUrl + (mentalStats.id || ""), {
    method: mentalStats.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(mentalStats),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteMentalStats(mentalStatsId) {
  return securedFetch(baseUrl + mentalStatsId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
