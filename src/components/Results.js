import React from 'react';

import '../styles/css/App.css';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { VictoryChart, VictoryScatter, VictoryContainer } from 'victory';

const Results = ({data, userName}) => {

  return (
    <div>
      <h2>
      Sentiment Analysis of recent Tweets from @{userName}
      </h2>
       <VictoryChart
       domain={{ x: [0, 50], y: [-1, 1] }}
       >
         <VictoryScatter
          size={3}
          data={data}
          x={0}
          y="result"
          containerComponent={<VictoryContainer height={200} />}
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


