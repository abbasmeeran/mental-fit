import { handleResponse, handleError, securedFetch } from "./apiUtils";
const baseUrl = process.env.API_URL + "/users/";

export function getProfile(token) {
  const url = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`;
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  })
    .then(handleResponse)
    .catch(() => handleError());
}
