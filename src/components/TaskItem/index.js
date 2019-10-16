import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import style from './style';
import { Button, Card, CardContent, CardActions, Typography, Box, Grid, Icon, Fab } from '@material-ui/core';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}><Typography component="h2">{task.title}</Typography></Grid>
            <Grid item md={4}>{status.label}</Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab color="primary" className={classes.fab} aria-label="Edit" size="small">
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab color="primary" className={classes.fab} aria-label="Delete" size="small">
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(style)(TaskItem);
