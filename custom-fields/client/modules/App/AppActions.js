// Export Constants
export const SHOW_MESSAGE = 'SHOW_MESSAGE';

// Export Actions
function setMessage(message) {
  return {
    type: SHOW_MESSAGE,
    message,
  };
}

export function bannerMessage(message) {
  return (dispatch) => {
    dispatch(setMessage(message));
  };
}
