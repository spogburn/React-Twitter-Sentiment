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
import { VictoryChart, VictoryScatter, VictoryContainer, VictoryAxis } from 'victory';

const Results = ({data, userName}) => {
  // tk
  // const dataForPie = transformDataForPie(data);
  // function transformDataForPie(tweets) {
  // let positive = 0;
  // let negative = 0;
  // let neutral = 0;
  // tweets.forEach(function(tweet){
  //   if (tweet.result === 0) {
  //     neutral++;
  //   } else if (tweet.result === 1) {
  //     positive++;
  //   } else {
  //     negative++;
  //   }
  // })
  //  return  [
  //           {x: 'positive', y: positive, label: 'positive'},
  //           {x: 'negative', y: negative, label:'negative'},
  //           {x: 'neutral', y: neutral, label: 'neutral'}
  //           ];
  // }

  return (
    <div>
      <h2>
      Sentiment Analysis of recent Tweets from {userName}
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
        <VictoryAxis
          dependentAxis
          tickValues={[-1, 0, 1]}
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
          const {tweet, emotion, result } = item;
            return (
              <TableRow key={tweet} className={result === 1 ? "positive" : result === -1 ? "negative" : "neutral"}>
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


