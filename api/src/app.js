import cors from 'cors';
import express from 'express';
import http from 'http';
import SensorService from './sensor-service';

class App {

  configure() {
    this.createServer();
    this.routeSensors();
  }

  createServer() {
    this.expressApp = express();
    this.httpServer = http.Server(this.expressApp);
  }

  routeSensors() {
    const sensorService = new SensorService();
    this.expressApp.get('/sensors', cors(), (req, res) => {
      res.json(sensorService.getSensors());
    });
  }

  run(port) {
    this.httpServer.listen(port);
  }
}

export default App;
