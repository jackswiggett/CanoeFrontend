import { combineReducers } from 'redux';
import { SET_CURRENT_VIEW, Views } from './actions';
const { LOGIN } = Views

const initialState = {
  currentView: Views.LOGIN
};

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
  currentView
});

export default canoeApp;
