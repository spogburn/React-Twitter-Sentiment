import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Layout from './Layout';
import configureStore from '../store';
import '../styles/css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const initialState = {};

const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider className="App">
        <Provider store={store}>
          <div className="App">
            <Layout />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
