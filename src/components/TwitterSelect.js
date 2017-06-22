import React, { Component } from 'react'
import '../styles/css/App.css';
import TextField from 'material-ui/TextField';

class TwitterSelect extends Component {
  render(){
    return (
      <div>
        <TextField type="text" hintText="Twitter user" />
      </div>
    )
  }
}

export default TwitterSelect;
