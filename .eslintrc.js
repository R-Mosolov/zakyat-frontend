module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "semi": ["error", "always"],
    "no-console": ["warn", { allow: ["warn", "error"]}],
  }
}
