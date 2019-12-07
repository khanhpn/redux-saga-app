import React, { Component } from 'react'
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Employee from '../../components/Employee';
import * as employeeActions from '../../actions/employee';

const mapStateToProps = state => {
  return {
    employees: state.employee.listEmployees
  }
}

const mapDispatchToProps = dispatch => {
  return {
    employeeActionCreators: bindActionCreators(employeeActions, dispatch)
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Employee);
