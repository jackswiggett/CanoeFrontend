import { combineReducers } from 'redux';
import {
  SET_CURRENT_VIEW,
  SET_USER_ID,
  SET_MAX_PRICE,
  SET_TRIP_DURATIONS,
  REQUEST_TRIP_DIGEST,
  RECEIVE_TRIP_DIGEST,
  SET_TRIP_DETAILS_INDEX,
  REQUEST_TOP_DESTINATIONS,
  RECEIVE_TOP_DESTINATIONS,
  Views
} from './actions';
const { LOGIN } = Views;

function currentView(state = LOGIN, action) {
  switch (action.type) {
    case SET_CURRENT_VIEW:
      return action.view
    default:
      return state
  }
}

function userId(state = '', action){
  switch(action.type) {
    case SET_USER_ID:
      return action.id
    default:
      return state;
  }
}

function maxPrice(state = 400, action) {
  switch (action.type) {
    case SET_MAX_PRICE:
      return action.maxPrice;
    default:
      return state;
  }
}

function tripDurations(state = {short: true, medium: true, long: true}, action) {
  switch (action.type) {
    case SET_TRIP_DURATIONS:
      return {
        short: action.short,
        medium: action.medium,
        long: action.long
      };
    default:
      return state;
  }
}

function tripDetailsIndex(state = 0, action) {
  switch (action.type) {
    case SET_TRIP_DETAILS_INDEX:
      return action.index;
    default:
      return state;
  }
}

const defaultAPIData = {
  isFetching: false,
  items: []
}

function tripDigest(state = defaultAPIData, action) {
  switch (action.type) {
    case REQUEST_TRIP_DIGEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_TRIP_DIGEST:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

function topDestinations(state = defaultAPIData, action) {
  switch (action.type) {
    case REQUEST_TOP_DESTINATIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_TOP_DESTINATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

const canoeApp = combineReducers({
  currentView,
  userId,
  maxPrice,
  tripDurations,
  tripDigest,
  tripDetailsIndex,
  topDestinations
});

export default canoeApp;
