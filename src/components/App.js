import React, { Component } from 'react';

import Layout from './Layout';

import '../styles/css/App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider className="App">
        <div className="App">
          <Layout />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
