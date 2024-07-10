'use strict';

var readFile = require('../../helper').readFile,
    createModdle = require('../../helper').createModdle;


describe('import -> export roundtrip', function() {

  function stripSpaces(xml) {
    return xml.replace(/\n|\r/g, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/\s\/>/g, '/>')
      .replace(/>\s+</g, '><');
  }

  function validateExport(file) {

    return async function() {

      // given
      var xml = readFile(file);

      var moddle = createModdle();

      // when
      const {
        rootElement: definitions,
        warnings
      } = await moddle.fromXML(xml, 'dmn:Definitions');

      // then
      expect(warnings).to.be.empty;

      // but when
      const {
        xml: savedXML
      } = await moddle.toXML(definitions);

      // then
      expect(stripSpaces(savedXML)).to.eql(stripSpaces(xml));
    };
  }


  describe('zeebe:VersionTag', function() {

    it('should keep zeebe:versionTag', validateExport('test/fixtures/xml/zeebe-versionTag.dmn'));

  });

});
