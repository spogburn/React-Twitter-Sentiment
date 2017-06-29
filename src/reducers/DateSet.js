const initialState = {
  startDate: new Date(new Date().setDate(new Date().getDate()-7)).toDateString(),
  endDate: new Date().toDateString(),
}

export default function DateSetter(state=initialState, action) {
  switch (action.type) {
    case 'SET_START_DATE': {
      return {...state, startDate: action.startDate}
    }
    case 'SET_END_DATE': {
      return {...state, endDate: action.endDate}
    }
    default: {
      return state;
    }
  }
}
