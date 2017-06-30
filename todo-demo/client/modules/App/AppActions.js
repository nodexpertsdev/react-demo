import * as data from './../../util/data';

// Export Constants
export const RECEIVED_DATA = 'RECEIVED_DATA';

// Export Actions
export function receivedData({ assignees, categories, tasks }) {
  return {
    type: RECEIVED_DATA,
    assignees,
    categories,
    tasks,
  };
}

export function setData() {
  return (dispatch) => {
    dispatch(receivedData(data));
  };
}

// export function setMessage(message) {
//   return {
//     type: SHOW_MESSAGE,
//     message,
//   };
// }

// export function bannerMessage(message) {
//   return (dispatch) => {
//     const dummy = obj;
//     dispatch(setMessage(dummy));
//   };
// }
