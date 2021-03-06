import 'whatwg-fetch';

/* Shape of our data store (for reference):
{
  currentView: "SETTINGS",
  userId: "Francis",
  maxPrice: 400,
  tripDurations: {
    short: true,
    medium: true,
    long: false
  },
  tripDigest: {
    isFetching: false,
    items: [...], // list of javascript objects representing possible trips, as returned by API
    lastUpdated: 1439478405547
  },
  tripDetailsIndex: 1, // index of trip currently shown in the TripDetails view
  topDestinations: {
    isFetching: false,
    items: [...],
    lastUpdated: 1439478405547
  },
  userRatings: {
    "SFO": 4,
    "SEA": 5,
    "NYC": 3
  }
}
*/

/*
 * action types
 */

export const SET_CURRENT_VIEW = "SET_CURRENT_VIEW";
export const SET_USER_ID = "SET_USER_ID";
export const SET_MAX_PRICE = "SET_MAX_PRICE";
export const SET_TRIP_DURATIONS = "SET_TRIP_DURATIONS";
export const SET_TRIP_DETAILS_INDEX = "SET_TRIP_DETAILS_INDEX";
export const RATE_DESTINATION = "RATE_DESTINATION";

// HTTP Request actions
export const REQUEST_TRIP_DIGEST = "REQUEST_TRIP_DIGEST";
export const RECEIVE_TRIP_DIGEST = "RECEIVE_TRIP_DIGEST";
// TODO: action on error when requesting trip digest

export const REQUEST_TOP_DESTINATIONS = "REQUEST_TOP_DESTINATIONS";
export const RECEIVE_TOP_DESTINATIONS = "RECEIVE_TOP_DESTINATIONS";

/*
 * other constants
 */

export const Views = {
  LOGIN: "LOGIN",
  RATE_CITIES: "RATE_CITIES",
  TRIP_DIGEST: "TRIP_DIGEST",
  TRIP_DETAILS: "TRIP_DETAILS",
  SETTINGS: "SETTINGS",
  TRIP_MAP: "TRIP_MAP",
};

const FETCH_TRIP_DIGEST_ENDPOINT = "http://canoes.azurewebsites.net/flightquerylocations/";
const FETCH_TRIP_DIGEST_ORIGIN = "SFO"; // TODO: find current location rather than hard-coding

const FETCH_TOP_DESTINATIONS_ENDPOINT = "http://canoes.azurewebsites.net/topdest/?period=2016-12&number_of_results=30" +
  "&origin=" + FETCH_TRIP_DIGEST_ORIGIN;

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

export function setTripDetailsIndex(index) {
  return {
    type: SET_TRIP_DETAILS_INDEX,
    index: index
  };
}

export function rateDestination(destination, rating) {
  return {
    type: RATE_DESTINATION,
    destination: destination,
    rating: rating
  };
}

export function requestTripDigest() {
  return {
    type: REQUEST_TRIP_DIGEST
  };
}

export function receiveTripDigest(json) {
  return {
    type: RECEIVE_TRIP_DIGEST,
    items: json,
    receivedAt: Date.now()
  };
}

export function fetchTripDigest(maxPrice, user, durations, userRatings) {
  return function(dispatch) {
    dispatch(requestTripDigest());

    // Format the range of possible departure dates
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1); // tomorrow
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7); // a week later

    function formatDate(date) {
      let isoDate = date.toISOString();
      if (isoDate.length === 27) {
        isoDate = isoDate.slice(3);
      }

      return isoDate.slice(0, 10);
    }

    const dateRange = formatDate(startDate) + "--" + formatDate(endDate);

    // Format the trip duration range
    let durationRange;
    console.log(durations);
    if (durations.short && !durations.medium) {
      durationRange = "1--2";
    } else if (durations.medium && !durations.short) {
      durationRange = "3--6";
    } else {
      console.log("def");
      durationRange = "1--6";
    }

    var locations = [];

    var location;

    for (location in userRatings) {
      if (userRatings[location] > 3) {
        locations.push(location);
      }
    }

    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    const init = {
      method: 'POST',
      body: JSON.stringify({
        locations: locations
      }),
      headers: headers
    };

    const url = FETCH_TRIP_DIGEST_ENDPOINT +
      "?origin=" + FETCH_TRIP_DIGEST_ORIGIN +
      "&max_price=" + maxPrice +
      "&departure_date=" + dateRange +
      //"&user=" + user +
      "&duration=" + durationRange;

    console.log(url);
    console.log(init.body);

    return fetch(url, init)
        .then(response => {
          return response.json();
        })
        .then(json => {
          dispatch(receiveTripDigest(json))
        })
        .catch(function(error) {
          alert("Unable to find flights matching your query :(. Try adjusting the settings!");
          dispatch(receiveTripDigest([]))
        });
  }
}

export function requestTopDestinations() {
  return {
    type: REQUEST_TOP_DESTINATIONS
  };
}

export function receiveTopDestinations(json) {
  return {
    type: RECEIVE_TOP_DESTINATIONS,
    items: json,
    receivedAt: Date.now()
  };
}

export function fetchTopDestinations() {
  return function(dispatch) {
    dispatch(requestTopDestinations());

    return fetch(FETCH_TOP_DESTINATIONS_ENDPOINT)
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(receiveTopDestinations(json));
      })
      .catch(function(error) {
        console.log("Error getting top destinations: " + error.message);
      });
  }
}
