const initialState = {
  userName: null
}

export default function TwitterHandle(state=initialState, action) {
  switch (action.type) {
    case 'SET_USERNAME': {
      return {...state, userName: action.userName}
    }
    default: {
      return state;
    }
  }
}
