import { expect } from '../expect.mjs';

import zeebeDescriptor from '../../resources/zeebe.json' with { type: 'json' };

describe('descriptor', function() {

  it('should provide model', function() {

    // then
    expect(zeebeDescriptor).to.exist;

    expect(zeebeDescriptor.uri).to.eql('http://camunda.org/schema/zeebe/1.0');
    expect(zeebeDescriptor.prefix).to.eql('zeebe');
  });

});