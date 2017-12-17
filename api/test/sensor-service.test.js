import _ from 'lodash';
import { expect } from 'chai';
import SensorService from '../src/sensor-service';

describe('SensorService', function () {
  const sensorService = new SensorService();

  describe('#getSensors', function () {
    it('groups sensors by id', function () {
      const sensors = sensorService.getSensors([
        { id: 'b', temperature: 3.0 },

        { id: 'a', temperature: 1.0 },
        { id: 'a', temperature: 2.0 }
      ]);

      expect(sensors).to.have.lengthOf(2);
      expect(sensors[0].id).to.eql('a');
      expect(sensors[1].id).to.eql('b');
    });

    it('calculates average temperature per sensor', function () {
      const sensors = sensorService.getSensors([
        { id: 'a', temperature: 1.0 },
        { id: 'a', temperature: 2.0 }
      ]);

      expect(sensors[0].id).to.eql('a');
      expect(sensors[0].average).to.eql(1.5);
    });

    it('calculates median temperature per sensor', function () {
      const sensors = sensorService.getSensors([
        { id: 'a', temperature: 1.0 },
        { id: 'a', temperature: 3.3 },
        { id: 'a', temperature: 4.0 },

        { id: 'b', temperature: 1.0 },
        { id: 'b', temperature: 3.0 },
        { id: 'b', temperature: 4.0 },
        { id: 'b', temperature: 9.0 }
      ]);

      expect(sensors[0].id).to.eql('a');
      expect(sensors[0].median).to.eql(3.3);

      expect(sensors[1].id).to.eql('b');
      expect(sensors[1].median).to.eql(3.5);
    });

    it('calculates mode temperature per sensor', function () {
      const sensors = sensorService.getSensors([
        { id: 'a', temperature: 1.5 },
        { id: 'a', temperature: 1.5 },
        { id: 'a', temperature: 1.7 },
        { id: 'a', temperature: 1.7 },
        { id: 'a', temperature: 1.9 },

        { id: 'b', temperature: 2.1 },

        { id: 'c', temperature: 3.3 },
        { id: 'c', temperature: 3.5 },
        { id: 'c', temperature: 3.5 }
      ]);

      expect(sensors[0].id).to.eql('a');
      expect(sensors[0].mode).to.eql([1.5, 1.7]);

      expect(sensors[1].id).to.eql('b');
      expect(sensors[1].mode).to.eql([2.1]);

      expect(sensors[2].id).to.eql('c');
      expect(sensors[2].mode).to.eql([3.5]);
    });
  });
});
