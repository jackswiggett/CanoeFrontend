import { combineReducers } from 'redux';
import {
  SET_CURRENT_VIEW,
  SET_USER_ID,
  SET_MAX_PRICE,
  SET_TRIP_DURATIONS,
  REQUEST_TRIP_DIGEST,
  RECEIVE_TRIP_DIGEST,
  SET_TRIP_DETAILS_INDEX,
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

const defaultTripDigest = {
  isFetching: false,
  items: []
}

function tripDigest(state = defaultTripDigest, action) {
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

const canoeApp = combineReducers({
  currentView,
  userId,
  maxPrice,
  tripDurations,
  tripDigest,
  tripDetailsIndex
});

export default canoeApp;
