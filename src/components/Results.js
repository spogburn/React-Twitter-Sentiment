import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ResultsActions from '../actions/ResultsActions';

import '../styles/css/App.css';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { VictoryChart, VictoryScatter } from 'victory';

const Results = ({data, userName}) => {
  console.log("data", data);
  console.log('twitterHandle', userName)

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
      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
            <TableRow>
                <TableHeaderColumn width={'75%'}>Tweet</TableHeaderColumn>
                <TableHeaderColumn>Sentiment</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        {
          data.map((item, i) => {
          const {tweet, emotion } = item;
            return (
              <TableRow key={i} striped={true} >
                <TableRowColumn  width={'75%'} style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word"
                    }}>{tweet}</TableRowColumn>
                <TableRowColumn>{emotion}</TableRowColumn>
              </TableRow>
              )
          })
        }
        </TableBody>
    </Table>
    </div>
  );
};

export default Results;


