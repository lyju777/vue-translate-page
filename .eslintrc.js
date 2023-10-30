module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
  },
};
