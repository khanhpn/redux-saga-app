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
import EmployeeContainer from '../Employee';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../../components/Home';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/employee" component={EmployeeContainer} />
        </Router>
      </Provider>
    );
  }
}


export default withStyles(styles)(App);
