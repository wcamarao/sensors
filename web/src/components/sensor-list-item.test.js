/* global describe it */

import { expect } from 'chai';
import SensorListItem from './sensor-list-item';

describe('SensorListItem', function () {
  describe('#format', function () {
    it('formats given number to two rounded decimal places', function () {
      const sensorListItem = new SensorListItem();
      expect(sensorListItem.format(1)).to.eql('1.00');
      expect(sensorListItem.format(1.1)).to.eql('1.10');
      expect(sensorListItem.format(1.114)).to.eql('1.11');
      expect(sensorListItem.format(1.115)).to.eql('1.12');
    });
  });
});
