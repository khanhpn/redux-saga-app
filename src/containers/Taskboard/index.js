import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from '../App/style'
import { Button, Grid, Box } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { STATUSES } from '../../constants/index';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';
import PropTypes from 'prop-types';
import SearchBox from '../../components/SearchBox';
import * as modalActions from '../../actions/modal';

class Taskboard extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  renderBoard() {
    const { listTasks } = this.props;
    let xhtml = null;
    if (listTasks === undefined) return xhtml;
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
    const { modalActionCreators } = this.props;
    const { showModal, hideModal, changeModalTitle, changeModalContent } = modalActionCreators;
    showModal();
    changeModalTitle('add new task');
  }

  renderForm() {
    let { open } = this.state;
    return <TaskForm open={open} onClose={this.handleClose} />
  }

  loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  handleFilter = (event) => {
    let { value } = event.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  }

  renderSearchBox() {
    let xhtml = null;
    xhtml = (
      <SearchBox handleChange={this.handleFilter}/>
    )
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.loadData()}>
          <Add/> Load data
        </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.openForm()}>
          <Add /> Add new task
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    )
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func
  }),
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func
  }),
  listTasks: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    listTasks: state.task.listTasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Taskboard));
