import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app-error.css';

class AppError extends Component {

  render() {
    if (!this.props.error) {
      return null;
    }

    return (
      <div className="app-error">{this.props.error.toString()}</div>
    );
  }
}

AppError.propTypes = {
  error: PropTypes.object
};

export default AppError;
