// Import Actions
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, RECEIVED_DATA } from './TasksActions';

// Initial State
const initialState = {
  assignees: [],
  categories: [],
  tasks: [],
};

const TasksReducers = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_DATA: {
      return Object.assign({}, state, {
        assignees: action.assignees,
        categories: action.categories,
        tasks: action.tasks,
      });
    }

    case ADD_TASK: {
      const tasks = state.tasks.map(item => item);
      tasks.push({
        id: action.data.id,
        name: action.data.name,
        description: action.data.description,
        assignee: action.data.assignee,
        category: action.data.category,
        due: action.data.due,
        done: action.data.done,
      });
      return Object.assign({}, state, { tasks });
    }

    case DELETE_TASK: {
      const tasks = state.tasks.filter(item => item.id !== action.id);
      return Object.assign({}, state, { tasks });
    }

    case TOGGLE_TASK: {
      const tasks = state.tasks.map(item => {
        const newItem = Object.assign({}, item);
        if (item.id === action.id) {
          newItem.done = !item.done;
        }
        return newItem;
      });
      return Object.assign({}, state, { tasks });
    }
    default:
      return state;
  }
};

/* Selectors */

export const getTasks = (state) => {
  return state.tasks.tasks;
};

export const getAssignees = (state) => {
  return state.tasks.assignees;
};

export const getCategories = (state) => {
  return state.tasks.categories;
};

export default TasksReducers;
