module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false
      }
    ],
    'vue/html-self-closing': [0],
    'vue/max-attributes-per-line': [0],
    'vue/html-closing-bracket-newline': [0],
    'vue/html-indent': [0],
    'vue/singleline-html-element-content-newline': [0],
    'space-before-function-paren': [0],
    'arrow-parens': [0],
    'no-console': [1],
    curly: [0]
  }
}
