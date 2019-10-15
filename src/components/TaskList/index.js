import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { Button, Card, CardContent, CardActions, Typography, Box, Grid } from '@material-ui/core';
import styles from './style';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid key={status.value} item md={4} xs={12}>
        <Box mt={2} mb={2}><div className={classes.status}>{status.label}</div></Box>
        <div className={classes.wrapperListTasks}>
          {
            tasks.map(task => {
              return <TaskItem key={task.id} task={task} status={status} />
            })
          }
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(TaskList);
