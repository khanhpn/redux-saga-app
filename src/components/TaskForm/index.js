import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Button, Modal, DialogActions, DialogContent, DialogTitle, TextField, Grid } from '@material-ui/core';
import style from './style';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

class TaskForm extends Component {
  render() {
    let { open, classes, onClose } = this.props;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={onClose}
      >
        <form>
          <Grid item md={12}>
            <Field name="title" component="input" type="text"></Field>
          </Grid>
          <Grid item md={12}>
            <Grid item md={8}>
              <TextField
                id="standard-name"
                label="Name"
                className={classes.textField}
                margin="normal"
              />
            </Grid>
            <Grid item md={8}>
              <TextField
                id="standard-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                className={classes.textField}
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid item md={12}>
            <Button onClick={onClose} color="primary">Cancel</Button>
            <Button onClick={onClose} color="primary">OK</Button>
          </Grid>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {

}

const FORM_NAME = 'TASK_MANAGEMENT';
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReduxForm = reduxForm({
  form: FORM_NAME
})

export default compose(
  withStyles(style),
  withConnect,
  withReduxForm
)(TaskForm);
