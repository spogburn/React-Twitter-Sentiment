import React, { Component } from 'react';
import TwitterSelect from './TwitterSelect';
import DateSelect from './DateSelect';
import Results from './Results';
import '../styles/css/App.css';

class Layout extends Component {

  render() {
    return (
      <div>
        <h1>This is a layout</h1>
        <TwitterSelect/>
        <DateSelect/>
        <Results results="Hello" />
      </div>

    )
  }

}

export default Layout;
