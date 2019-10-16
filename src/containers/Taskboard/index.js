import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from '../App/style'
import { Button, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { STATUSES } from '../../constants/index';
import TaskList from '../../components/TaskList';

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
  state = {
    open: false
  };

  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map(item => {
            const taskFiltered = listTasks.filter(task => task.status === item.value);
            return <TaskList key={item.value} tasks={taskFiltered} status={item} />
          })
        }
      </Grid>
    );
    return xhtml;
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  openForm = () => {
    this.setState({ open: true });
  }

  renderForm() {
    let { open } = this.state;
    let xhtml = null;
    xhtml = (
      <Dialog open={open} onClose={this.handleClose()} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <h1>Dialog content</h1>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose()} color="primary">Cancel</Button>
          <Button onClick={this.handleClose()} color="primary">OK</Button>
        </DialogActions>
      </Dialog>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm()}>
          <Add/> Add new task
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    )
  }
}

export default withStyles(styles)(Taskboard);
