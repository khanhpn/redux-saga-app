import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import style from './style';
import { Link } from 'react-router-dom';

class Employee extends Component {
  componentDidMount() {
    let { employeeActionCreators } = this.props;
    let { fetchEmployees } = employeeActionCreators;
    fetchEmployees();
  }

  render() {
    let { employees } = this.props;
    if (employees.length === 0) return null;
    let emp = employees.map(item => {
      return <div key={item.id}>{item.employee_name}</div>
    });
    return (
      <div>
        <Link to="/employee/new">new</Link>
        {emp}
      </div>
    )
  }
}

export default withStyles(style)(Employee);
