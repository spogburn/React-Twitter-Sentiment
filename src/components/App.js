import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Layout from './Layout';
import configureStore from '../store';
import '../styles/css/App.css';
import { blueGrey500, blueGrey300, deepOrange900, grey100, grey400, grey700 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const initialState = {};

const store = configureStore(initialState);

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey300,
    primary3Color: grey400,
    accent1Color: deepOrange900,
    accent2Color: grey100,
    accent3Color: grey700,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider className="App" muiTheme={muiTheme}>
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
