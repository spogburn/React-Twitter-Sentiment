import axios from 'axios';

function validateHandleRequest() {
  return {
    type: "VALIDATE_HANDLE_REQUEST",
  }
}

function validateHandleSuccess(response) {
  return {
    type: "VALIDATE_HANDLE_SUCCESS",
    response
  }
}

function validateHandleFailure(error) {
  return {
    type: "VALIDATE_HANDLE_FAILURE",
    error
  }
}

export function setTwitterHandle(userName) {
  return {
    type: "SET_USERNAME",
    userName
  }
}

export function validateHandle(userName) {
  console.log('validating', userName)
  const apiCall = axios.get(`http://localhost:3000/validate_user/${userName}`)
  return dispatch => {
    dispatch(validateHandleRequest());
    return apiCall
    .then((response) => {
      return dispatch(validateHandleSuccess(response));
    })
    .catch((error) => {
      console.log('error', error);
      return dispatch(validateHandleFailure(error));
    })
  }
}

