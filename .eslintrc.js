module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  'extends': [
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [2, 'always'],
    'space-before-function-paren': ['error', 'never']
  }
};