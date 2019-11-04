import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import style from './style';
import * as modalActions from '../../actions/modal';

class Modal extends Component {
  render() {
    const { classes, open, modalActionCreators } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={hideModal}
      >
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  open: state.modal.showModal,
  title: state.modal.title,
  component: state.modal.component,
});

const mapDispatchToProps = dispatch => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withStyles(style),
  withConnect
)(Modal);
