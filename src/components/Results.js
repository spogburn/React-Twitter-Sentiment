import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/css/App.css';


const Results = ({results}) => {

  return (
    <div>
      <RaisedButton label="Analyze" primary={true}/>
      <div>{results}</div>
    </div>
  )

}

export default Results;

