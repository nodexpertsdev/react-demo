// Import Actions
import { SHOW_MESSAGE } from './AppActions';

// Initial State
const initialState = {
  message: '',
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        message: action.message,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getMessage = (state) => {
  return state.app.message;
};

// Export Reducer
export default AppReducer;
