import * as data from './../../util/data';

// Export Constants
export const RECEIVED_DATA = 'RECEIVED_DATA';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

// ACTIONS
export function receivedData({ assignees, categories, tasks }) {
  return {
    type: RECEIVED_DATA,
    assignees,
    categories,
    tasks,
  };
}

export function receivedTask(data) {
  return {
    type: ADD_TASK,
    data,
  };
}

export function receivedRemoveTask(id) {
  return {
    type: DELETE_TASK,
    id,
  };
}

export function receivedToggleTask(id) {
  return {
    type: TOGGLE_TASK,
    id,
  };
}

let nextTaskId = 0;

// ACTION CREATORS
export const addTask = data => {
  const task = Object.assign({}, data, { id: nextTaskId++, done: false });
  return (dispatch) => {
    dispatch(receivedTask(task));
  };
};

export const deleteTask = id => {
  return (dispatch) => {
    dispatch(receivedRemoveTask(id));
  };
};

export const toggleTask = id => {
  return (dispatch) => {
    dispatch(receivedToggleTask(id));
  };
};

export function setData() {
  return (dispatch) => {
    dispatch(receivedData(data));
  };
}
