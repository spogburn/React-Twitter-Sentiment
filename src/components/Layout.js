import React, { Component } from 'react';
import TwitterSelect from './TwitterSelect';
import DateSelect from './DateSelect';
import Results from './Results';
import '../styles/css/App.css';


class Layout extends Component {

  render() {
    return (
      <div>
        <h1>Tweet Sentiment Analyzer</h1>
        <TwitterSelect/>
        <DateSelect/>
        <Results results="Results here" />
      </div>

    );
  }

}

export default Layout;
