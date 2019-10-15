import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from '../App/style'
import { Button, Card, CardContent, CardActions, Typography, Box } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants/index';


const listTasks = [
  {
    id: 0,
    title: 'Read js book',
    description: 'read this book and buy it',
    status: 0
  },
  {
    id: 1,
    title: 'Read java book',
    description: 'read this book and buy it',
    status: 1
  },
  {
    id: 2,
    title: 'Read ruby book',
    description: 'read this book and buy it',
    status: 2
  },
  {
    id: 3,
    title: 'Read css book',
    description: 'read this book and buy it',
    status: 0
  }
];

class Taskboard extends Component {
  renderBoard() {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map(item => {
            const taskFiltered = listTasks.filter(task => task.status === item.value);
            return (
              <Grid key={item.value} item md={4} xs={12}>
                <Box mt={2} mb={2}><div className={classes.status}>{item.label}</div></Box>
                <div className={classes.wrapperListTasks}>
                  {
                    taskFiltered.map(task => {
                      const { title, description, status, id } = task;
                      return (
                        <Card key={id} className={classes.card}>
                          <CardContent>
                            <Grid container justify="space-between">
                              <Grid item md={8}><Typography component="h2">{title}</Typography></Grid>
                              <Grid item md={4}>{item.label}</Grid>
                            </Grid>
                          </CardContent>
                          <CardActions><Button size="small"></Button></CardActions>
                        </Card>
                      )
                    })
                  }
                </div>
              </Grid>
            )
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
