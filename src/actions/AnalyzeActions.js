import axios from 'axios';
import _ from 'lodash';

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

export function getSentiment(tweets) {
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
          result: emotionToNumber(item[0].result)
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

function emotionToNumber(emotion) {
  let number = 0;
  if (emotion === 'Positive') {
    number = 3;
  }
  if (emotion === 'Negative') {
    number = -3
  }
  return number;
}
