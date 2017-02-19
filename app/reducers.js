import { combineReducers } from 'redux';
import {
  SET_CURRENT_VIEW,
  SET_USER_ID,
  SET_MAX_PRICE,
  SET_TRIP_DURATIONS,
  Views
} from './actions';
const { LOGIN } = Views

/*export default function canoeApp(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_VIEW:
      return Object.assign({}, state, {
        currentView: action.view
      });
    default:
      return state;
  }
}*/

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

function maxPrice(state = 200, action) {
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

/*function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}*/

const canoeApp = combineReducers({
  currentView,
  userId,
  maxPrice,
  tripDurations
});

export default canoeApp;
