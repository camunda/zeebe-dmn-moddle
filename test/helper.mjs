import fs from 'node:fs';

import { DmnModdle } from 'dmn-moddle';

import zeebeDescriptor from '../resources/zeebe.json' with { type: 'json' };

function readFile(filename) {
  return fs.readFileSync(filename, { encoding: 'UTF-8' });
}

function createModdle() {
  return new DmnModdle({
    zeebe: zeebeDescriptor
  });
}

export {
  createModdle,
  readFile
};