import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ResultsActions from '../actions/ResultsActions';

import '../styles/css/App.css';

import { VictoryChart, VictoryScatter } from 'victory';

const Results = ({data}) => {
const Results = ({data, userName}) => {
  console.log("data", data);

  return (
    <div>
      <h1 style={{'margin-bottom': "10%"}}>
      Sentiment Analysis of recent Tweets from @{userName}
      </h1>
       <VictoryChart
       domain={{ x: [0, 50], y: [-1, 1] }}
       >
         <VictoryScatter
          size={3}
          data={data}
          x={0}
          y="result"
        />
      </VictoryChart>
    </div>
  );
};

export default Results;


