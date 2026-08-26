import { createRequire } from 'node:module';

import { expect } from '../expect.mjs';

const require = createRequire(import.meta.url);
const zeebeDescriptor = require('../../resources/zeebe.json');

describe('descriptor', function() {

  it('should provide model', function() {

    // then
    expect(zeebeDescriptor).to.exist;

    expect(zeebeDescriptor.uri).to.eql('http://camunda.org/schema/zeebe/1.0');
    expect(zeebeDescriptor.prefix).to.eql('zeebe');
  });

});