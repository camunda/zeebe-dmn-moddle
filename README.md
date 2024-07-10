# zeebe-dmn-moddle

[![CI](https://github.com/camunda/zeebe-dmn-moddle/workflows/CI/badge.svg)](https://github.com/camunda/zeebe-dmn-moddle/actions?query=workflow%3ACI)

This project defines the [Zeebe](https://zeebe.io) namespace extensions for DMN as a [moddle](https://github.com/bpmn-io/moddle) descriptor.

## Usage

Use it together with [dmn-moddle](https://github.com/bpmn-io/dmn-moddle) to validate Zeebe DMN extensions.

```javascript
const DmnModdle = require('dmn-moddle');

const zeebeModdle = require('zeebe-dmn-moddle/resources/zeebe.json');

const moddle = new DmnModdle({ zeebe: zeebeModdle });

const versionTag = moddle.create('zeebe:VersionTag', {
  value: 'v1.0.0'
});

const decision = moddle.create('dmn:Decision', {
  extensionElements: moddle.create('dmn:ExtensionElements', {
    values: [ versionTag ]
  })
});
```

## Building the Project

Execute the test via

```sh
npm test
```

Perform a complete build of the application via

```sh
npm run all
```

## License

Use under the terms of the [MIT license](http://opensource.org/licenses/MIT).
