import React, { Component } from 'react';
import styles from './style';
import { withStyles } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import Taskboard from '../Taskboard';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import { ToastContainer, Toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <ToastContainer />
          <GlobalLoading />
          <Taskboard></Taskboard>
        </ThemeProvider>
      </Provider>
    );
  }
}


export default withStyles(styles)(App);
