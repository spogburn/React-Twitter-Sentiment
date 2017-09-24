import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as ResultsActions from '../actions/ResultsActions';
import '../styles/css/App.css';
import { VictoryChart, VictoryScatter } from 'victory';


const Results = ({data}) => {
  console.log("data", data);

  return (
    <div>
      <h1>Results go here</h1>
       <VictoryChart  domain={{ x: [0, 20], y: [-5, 5] }}>
         <VictoryScatter
          style={{ data: { fill: "#c43a31" } }}
          size={7}
          data={data}
          x={0}
          y="result"
        />
      </VictoryChart>
    </div>
  );
};

export default Results;


