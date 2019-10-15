import React, { Component } from 'react';
import styles from './style';
import { withStyles } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import Taskboard from '../Taskboard';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider>
        <Taskboard></Taskboard>
      </ThemeProvider>
    );
  }
}


export default withStyles(styles)(App);
