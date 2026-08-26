import fs from 'node:fs';
import { createRequire } from 'node:module';

import DmnModdle from 'dmn-moddle';

const require = createRequire(import.meta.url);
const zeebeDescriptor = require('../resources/zeebe.json');

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