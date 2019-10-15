import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from '../App/style'
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants/index';

class Taskboard extends Component {
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map(item => {
            return <Grid key={item.value} item md={4} xs={12}>{item.label}</Grid>
          })
        }
      </Grid>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained" color="primary" className={classes.button}>
          <Add/> Add new task
        </Button>
        {this.renderBoard()}
      </div>
    )
  }
}

export default withStyles(styles)(Taskboard);
