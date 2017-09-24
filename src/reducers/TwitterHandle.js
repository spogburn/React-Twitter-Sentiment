const initialState = {
  userName: null,
  validating: false,
  validated: false,
  error: null,
  tweets: null,
};

export default function TwitterHandle(state=initialState, action) {
  switch (action.type) {
    case 'SET_USERNAME': {
      console.log('setting username');
      return {...state, userName: action.userName};
    }
    case 'VALIDATE_HANDLE_REQUEST': {
      console.log('being validated');
      return {...state, validating: true};
    }
    case 'VALIDATE_HANDLE_FAILURE': {
      const error = "Twitter handle not found or unavailable";
      return {...state, validating: false, error };
    }
    case 'VALIDATE_HANDLE_SUCCESS': {
      const tweets = action.response;
      return {
        ...state,
        validating: false,
        validated: true,
        error: null,
        tweets,
      };
    }
    default: {
      return state;
    }
  }
}
