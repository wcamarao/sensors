import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SensorListItem from './sensor-list-item';
import './sensor-list.css';

class SensorList extends Component {

  render() {
    return (
      <div className="sensor-list">
        <table className="table">
          <thead>
            <tr>
              <th>Sensor ID</th>
              <th>Average</th>
              <th>Median</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {this.props.sensors.map((sensor) => {
              return <SensorListItem key={sensor.id} sensor={sensor} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

SensorList.propTypes = {
  sensors: PropTypes.array.isRequired
};

export default SensorList;
