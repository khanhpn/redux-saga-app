import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from '../App/style'

class Taskboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <div className={classes.shape}>React</div>
        <div className={classes.shape}>Angular</div>
      </div>
    )
  }
}

export default withStyles(styles)(Taskboard);
