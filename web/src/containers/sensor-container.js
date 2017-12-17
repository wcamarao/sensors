import axios from 'axios';
import React, { Component } from 'react';
import AppError from '../components/app-error';
import SensorList from '../components/sensor-list';

class SensorContainer extends Component {

  static get API_SENSORS_URL() {
    return 'http://localhost:8080/sensors';
  }

  constructor() {
    super();

    this.state = {
      sensors: []
    };
  }

  componentDidMount() {
    axios.get(SensorContainer.API_SENSORS_URL)
      .then((response) => {
        this.setState({ sensors: response.data });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <div className="sensor-container">
        <AppError error={this.state.error} />
        <SensorList sensors={this.state.sensors} />
      </div>
    );
  }
}

export default SensorContainer;
