import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './style';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <div>
            <TextField
              autoComplete="off"
              required
              onChange={handleChange}
              className={classes.textField}
              margin="normal"
              placeholder="Search key"
            />
          </div>
        </form>
      </div>
    )
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func
}

export default withStyles(styles)(SearchBox);
