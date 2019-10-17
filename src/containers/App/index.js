import React, { Component } from 'react';
import styles from './style';
import { withStyles } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import Taskboard from '../Taskboard';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider>
          <Taskboard></Taskboard>
        </ThemeProvider>
      </Provider>
    );
  }
}


export default withStyles(styles)(App);
