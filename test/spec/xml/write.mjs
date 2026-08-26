import minDash from 'min-dash';

import { expect } from '../../expect.mjs';

import { createModdle } from '../../helper.mjs';

const {
  assign,
  isFunction
} = minDash;

describe('write', function() {

  var moddle = createModdle();


  async function write(element, options, callback) {
    if (isFunction(options)) {
      callback = options;
      options = {};
    }

    // skip preamble for tests
    options = assign({ preamble: false }, options);

    const { xml } = await moddle.toXML(element, options);

    return xml;
  }


  describe('should export properties', function() {

    it('zeebe:VersionTag', async function() {

      // given
      const moddleElement = moddle.create('zeebe:VersionTag', {
        value: 'v1.0.0'
      });

      const expectedXML = '<zeebe:versionTag ' +
        'xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" ' +
        'value="v1.0.0" />';

      // when
      const xml = await write(moddleElement);

      // then
      expect(xml).to.eql(expectedXML);
    });

  });

});
