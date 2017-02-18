/*
 * action types
 */

export const SET_CURRENT_VIEW = "SET_CURRENT_VIEW";

/*
 * other constants
 */

export const Views = {
  LOGIN: "LOGIN",
  RATE_CITIES: "RATE_CITIES",
  TRIP_DIGEST: "TRIP_DIGEST",
  TRIP_DETAILS: "TRIP_DETAILS",
  SETTINGS: "SETTINGS"
};

/*
 * action creators
 */

export function setCurrentView(view) {
  return {
    type: SET_CURRENT_VIEW,
    view: view
  };
}