import _ from 'lodash';

const SENSOR_EVENTS = [
  { "id": "a", "timestamp": 1509493641, "temperature": 3.53 },
  { "id": "b", "timestamp": 1509493642, "temperature": 4.13 },
  { "id": "c", "timestamp": 1509493643, "temperature": 3.96 },
  { "id": "a", "timestamp": 1509493644, "temperature": 3.63 },
  { "id": "c", "timestamp": 1509493645, "temperature": 3.96 },
  { "id": "a", "timestamp": 1509493645, "temperature": 4.63 },
  { "id": "a", "timestamp": 1509493646, "temperature": 3.53 },
  { "id": "b", "timestamp": 1509493647, "temperature": 4.15 },
  { "id": "c", "timestamp": 1509493655, "temperature": 3.95 },
  { "id": "a", "timestamp": 1509493677, "temperature": 3.66 },
  { "id": "b", "timestamp": 1510113646, "temperature": 4.15 },
  { "id": "c", "timestamp": 1510127886, "temperature": 3.36 },
  { "id": "c", "timestamp": 1510127892, "temperature": 3.36 },
  { "id": "a", "timestamp": 1510128112, "temperature": 3.67 },
  { "id": "b", "timestamp": 1510128115, "temperature": 3.88 }
];

class SensorService {

  getSensors(sensorEvents) {
    sensorEvents = sensorEvents || SENSOR_EVENTS;
    const temperaturesById = {};
    const sensors = [];

    _.each(sensorEvents, (event) => {
      if (!_.has(temperaturesById, event.id)) {
        temperaturesById[event.id] = [];
      }
      temperaturesById[event.id].push(event.temperature);
    });

    _.each(temperaturesById, (temperatures, id) => {
      temperatures.sort();
      sensors.push({
        id: id,
        average: this.average(temperatures),
        median: this.median(temperatures),
        mode: this.mode(temperatures)
      });
    });

    return _.sortBy(sensors, 'id');
  }

  average(array) {
    return _.sum(array) / _.size(array);
  }

  median(sortedArray) {
    const middle = (sortedArray.length + 1) / 2;

    if (sortedArray.length % 2) {
      return sortedArray[middle - 1];
    }

    return (sortedArray[middle - 1.5] + sortedArray[middle - 0.5]) / 2;
  }

  mode(array) {
    const mode = [];
    const counted = _.countBy(array, (el) => el.toString());
    let max = _.max(_.values(counted));

    _.forIn(counted, (val, key) => {
      if (val === max) {
        mode.push(parseFloat(key));
      }
    });

    return mode;
  }
}

export default SensorService;
