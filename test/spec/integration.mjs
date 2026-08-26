import { createRequire } from 'node:module';

import { DmnModdle } from 'dmn-moddle';

import { expect } from '../expect.mjs';

const require = createRequire(import.meta.url);
const zeebeDescriptor = require('../../resources/zeebe.json');


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