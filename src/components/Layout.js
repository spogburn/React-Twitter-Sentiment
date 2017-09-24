import React, { Component } from 'react';
import TwitterSelect from './TwitterSelect';
import Analyze from './Analyze';
import '../styles/css/App.css';

class Layout extends Component {

  render() {
    return (
      <div>
        <h1>Tweet Sentiment Analyzer</h1>
        <TwitterSelect/>
        <Analyze/>
      </div>
    );
  }
}

export default Layout;
