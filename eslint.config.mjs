import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  ignored: [
    'coverage',
    'node_modules'
  ],
  test: [
    'test/**/*.mjs'
  ]
};

export default [
  {
    ignores: files.ignored
  },
  ...bpmnIoPlugin.configs.esm.map(config => ({
    ...config,
    files: files.test
  })),
  ...bpmnIoPlugin.configs.mocha.map(config => ({
    ...config,
    files: files.test
  })),
  {
    files: files.test,
    languageOptions: {
      ecmaVersion: 'latest'
    }
  }
];
