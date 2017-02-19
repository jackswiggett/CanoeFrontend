/*
 * action types
 */

export const SET_CURRENT_VIEW = "SET_CURRENT_VIEW";
export const SET_USER_ID = "SET_USER_ID";
export const SET_MAX_PRICE = "SET_MAX_PRICE";
export const SET_TRIP_DURATIONS = "SET_TRIP_DURATIONS";

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

export function setUserId(userID){
	return {
    type: SET_USER_ID,
    id: userID
  };
}

export function setMaxPrice(maxPrice) {
  return {
    type: SET_MAX_PRICE,
    maxPrice: maxPrice
  };
}

export function setTripDurations(short, medium, long) {
  /* short, medium, and long are boolean values */
  return {
    type: SET_TRIP_DURATIONS,
    short: short,
    medium: medium,
    long: long
  };
}
