import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import style from './style';
import LoadingIcon from '../../assets/loading.gif';
import PropTypes from 'prop-types';

class GlobalLoading extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.globalloading}>
        <img src={LoadingIcon} alt="loading" className={classes.icon}></img>
      </div>
    )
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object
}

export default withStyles(style)(GlobalLoading);
