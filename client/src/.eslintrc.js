module.exports = {
  root: true,
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['plugin:vue/essential', 'standard'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'vue/custom-event-name-casing': ['error',
      'camelCase',
      {
        ignores: []
      }
    ]

  },
  globals: {
    localStorage: true,
    sessionStorage: true,
    $: true
  }
}