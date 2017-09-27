import axios from 'axios';
import _ from 'lodash';

function validateHandleRequest() {
  return {
    type: 'VALIDATE_HANDLE_REQUEST',
  };
}

function validateHandleSuccess(response) {
  return {
    type: 'VALIDATE_HANDLE_SUCCESS',
    response,
  };
}

function validateHandleFailure(error) {
  return {
    type: 'VALIDATE_HANDLE_FAILURE',
    error,
  };
}

function sentimentRequest() {
  return {
    type: 'SENTIMENT_REQUEST'
  }
}

function sentimentRequestSuccess(response) {
  return {
    type: 'SENTIMENT_REQUEST_SUCCESS',
    response,
  }
}

function sentimentRequestFailure(error) {
  return {
    type: 'SENTIMENT_REQUEST_FAILURE',
    error
  }
}

export function setTwitterHandle(userName) {
  return {
    type: 'SET_USERNAME',
    userName,
  };
}

export function getTweets(userName) {
  const apiCall = axios.get(`https://twitter-sentiment-graph.herokuapp.com/validate_user/${userName}`)
  // const apiCall = axios.get(`http://localhost:3000/validate_user/${userName}`);
  return dispatch => {
    dispatch(validateHandleRequest());
    return apiCall
      .then((response) => {
        if (response.data.length) {
          return dispatch(validateHandleSuccess(response.data));
        } else {
          const error = "This is a valid handle but there were no results";
          return dispatch(validateHandleFailure(error));
        }
      })
      .catch((error) => {
        return dispatch(validateHandleFailure(error));
      });
  };
}

function getSentiment(tweets) {
  // const sentimentCall = axios.post(`http://localhost:3000/analyze`, tweets);
  const sentimentCall = axios.post(`https://twitter-sentiment-graph.herokuapp.com/analyze`, tweets);
  return dispatch => {
    dispatch(sentimentRequest())
    return sentimentCall
    .then((response) => {
      const tweetsWithAnalysis = _.zip(response.data.body, tweets);
      const analyzedTweets = _.map(tweetsWithAnalysis, function(item) {
        // item is [ {response: value, confidence: value}, tweetString]
        let analyzed = {
          tweet: item[1],
          result: emotionToNumber(item[0].result),
          emotion: item[0].result,
          fill: getFillColor(emotionToNumber(item[0].result))
        };
        return analyzed;
      })
      dispatch(sentimentRequestSuccess(analyzedTweets));
    })
    .catch((error) => {
      dispatch(sentimentRequestFailure(error))
    })
  }
}

export function getTweetsAndSentiment(userName) {
  return (dispatch, getState) => {
    return dispatch(getTweets(userName)).then((tweets) => {
      return dispatch(getSentiment(tweets.response))
    })
    .catch((error) => {
      dispatch(sentimentRequestFailure(error))
    })
  }
}

function emotionToNumber(emotion) {
  let number = 0;
  if (emotion === 'Positive') {
    number = 1;
  }
  if (emotion === 'Negative') {
    number = -1
  }
  return number;
}

function getFillColor(data) {
  let color = '#7E7B85';
  if (data > 0) {
    color = '#18A97C';
  } else if (data < 0) {
    color = '#AE0465';
  }
  return color;
}


