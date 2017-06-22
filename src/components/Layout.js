import React, { Component } from 'react';
import TwitterSelect from './TwitterSelect';
import DateSelect from './DateSelect';
import '../styles/css/App.css';

class Layout extends Component {

  render() {
    return (
      <div>
        <h1>This is a layout</h1>
        <TwitterSelect/>
        <DateSelect/>
      </div>

    )
  }

}

export default Layout;
