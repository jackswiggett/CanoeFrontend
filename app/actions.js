import fetch from 'isomorphic-fetch';

/*
 * action types
 */

export const SET_CURRENT_VIEW = "SET_CURRENT_VIEW";
export const SET_USER_ID = "SET_USER_ID";
export const GET_POPULAR_CITIES = "GET_POPULAR_CITIES";

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

export function getPopularCities(){
  return{
    type: GET_POPULAR_CITIES,
   // popularCities: 
  };
}