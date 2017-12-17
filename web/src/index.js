import React from 'react';
import ReactDOM from 'react-dom';
import SensorContainer from './containers/sensor-container';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<SensorContainer />, document.getElementById('root'));
registerServiceWorker();
