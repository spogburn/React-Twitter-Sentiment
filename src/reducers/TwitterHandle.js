const initialState = {
  userName: null,
  validating: false,
  validated: false,
  error: null
}

export default function TwitterHandle(state=initialState, action) {
  switch (action.type) {
    case 'SET_USERNAME': {
      console.log('setting username')
      return {...state, userName: action.userName}
    }
    case 'VALIDATE_HANDLE_REQUEST': {
      console.log('being validated')
      return {...state, validating: true}
    }
    case 'VALIDATE_HANDLE_FAILURE': {
      console.log('failure', action.error)
      return {...state, validating: false, error: action.error }
    }
    case 'VALIDATE_HANDLE_SUCCESS': {
      console.log('success!', action.response)
      return {
        ...state,
        validating: false,
        validated: true,
        error: null,
      }
    }
    default: {
      return state;
    }
  }
}
