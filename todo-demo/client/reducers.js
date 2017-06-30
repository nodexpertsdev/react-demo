/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import tasks from './modules/Tasks/TasksReducers';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  tasks,
});
