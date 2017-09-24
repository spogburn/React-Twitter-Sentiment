const initialState = {
  analysis: null
};

export default function Results(state=initialState, action) {
  switch (action.type) {
    case 'SENTIMENT_REQUEST': {
      console.log('being validated');
      return {...state, requestingSentiment: true};
    }
    case 'SENTIMENT_REQUEST_FAILURE': {
      console.log('failure', action.error);
      const error = "There was a failure analyzing these tweets";
      return {...state, sentimentRequestSuccess: false, error };
    }
    case 'SENTIMENT_REQUEST_SUCCESS': {
      const analysis = action.response;
      console.log('got analysis!!', analysis);
      return {
        ...state,
        sentimentRequestSuccess: true,
        analysis,
      };
    }
    default: {
      return state;
    }
  }
}
