import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import style from './style';

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Link to="/">home</Link>
        <Link to="/employee">employee</Link>
      </div>
    )
  }
}

export default withStyles(style)(Home);
