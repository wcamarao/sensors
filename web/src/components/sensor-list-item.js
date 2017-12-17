import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './sensor-list-item.css';

class SensorListItem extends Component {

  render() {
    return (
      <tr className="sensor-list-item">
        <th>{this.props.sensor.id}</th>
        <td>{this.format(this.props.sensor.average)}</td>
        <td>{this.format(this.props.sensor.median)}</td>
        <td>[{_.map(this.props.sensor.mode, this.format).join(', ')}]</td>
      </tr>
    );
  }

  format(num) {
    return (Math.round(num * 100) / 100).toFixed(2);
  }
}

SensorListItem.propTypes = {
  sensor: PropTypes.object.isRequired
};

export default SensorListItem;
