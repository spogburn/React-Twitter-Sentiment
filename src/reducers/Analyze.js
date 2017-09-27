const initialState = {
  analysis: null,
  sentimentRequestSuccess: false,
  requestingSentiment: false,
  error: null,
};

export default function Results(state=initialState, action) {
  switch (action.type) {
    case 'SENTIMENT_REQUEST': {
      return {...state, requestingSentiment: true, sentimentRequestSuccess: false};
    }
    case 'SENTIMENT_REQUEST_FAILURE': {
      const error = "There was a failure analyzing these tweets";
      return {...state, error };
    }
    case 'SENTIMENT_REQUEST_SUCCESS': {
      const analysis = action.response;
      return {
        ...state,
        sentimentRequestSuccess: true,
        requestingSentiment: false,
        error: null,
        analysis,
      };
    }
    default: {
      return state;
    }
  }
}
