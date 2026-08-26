import { DmnModdle } from 'dmn-moddle';

import { expect } from '../expect.mjs';

import zeebeDescriptor from '../../resources/zeebe.json' with { type: 'json' };


describe('exports', function() {

  it('should extend dmn-moddle', function() {

    // given
    var moddle = new DmnModdle({
      zeebe: zeebeDescriptor
    });

    // when
    // then
    expect(() => moddle.create('zeebe:VersionTag')).not.to.throw();
  });

});