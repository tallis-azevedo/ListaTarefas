module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      // para os seus arquivos de configuração do build
      files: [
        'postcss.config.js',
        'tailwind.config.js',
        'vite.config.js'
      ],
      env: {
        node: true
      },
      rules: {
        // desativa o “no-undef” nesses arquivos
        'no-undef': 'off'
      }
    }
  ]
}
