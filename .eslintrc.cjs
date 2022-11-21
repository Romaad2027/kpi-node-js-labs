module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ["sonarjs"],
  extends: ["standard", "plugin:sonarjs/recommended"],
  rules: {
  }
}
