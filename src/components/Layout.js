import React, { Component } from 'react';
import TwitterSelect from './TwitterSelect';
import '../styles/css/App.css';

class Layout extends Component {

  render() {
    return (
      <div>
        <h1>Tweet Sentiment Analyzer</h1>
        <TwitterSelect/>
      </div>
    );
  }
}

export default Layout;
