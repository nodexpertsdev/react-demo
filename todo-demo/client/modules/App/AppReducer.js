// Import Actions
import { RECEIVED_DATA, SHOW_MESSAGE } from './AppActions';

// Initial State
const initialState = {
  message: '',
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_DATA:
      return Object.assign({}, state, {
        assignees: action.assignees,
        categories: action.categories,
        tasks: action.tasks,
      });
      // {
      //   ...state,
      //   assignees: action.assignees,
      //   categories: action.categories,
      //   tasks: action.tasks,
      // };

    case SHOW_MESSAGE:
      return {
        message: Object.assign({}, state, {
          data: action.data,
        }),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getTasks = (state) => {
  return state.app.tasks;
};

export const getAssignees = (state) => {
  return state.app.assignees;
};

export const getCategories = (state) => {
  return state.app.categories;
};

export const getMessage = (state) => {
  return state.app.message;
};

// Export Reducer
export default AppReducer;
