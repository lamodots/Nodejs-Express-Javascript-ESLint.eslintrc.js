// .eslintrc.js
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    'plugin:express/recommended',
    'prettier'
  ],
  plugins: [
    'express',
    'no-relative-import-paths'
  ],
  env: {
    node: true,
    es2022: true,
    jest: true
  },
  rules: {
    // Core Express/Node rules
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'node/file-extension-in-import': ['error', 'always', { '.js': 'never' }],
    'express/use-error-handler': 'error',
    
    // Security rules
    'security/detect-object-injection': 'off',
    'security/detect-non-literal-fs-filename': 'error',
    
    // Express-specific patterns
    'express/avoid-unused-params': 'warn',
    'express/require-error-handling': 'error',
    
    // Import organization
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      { allowSameFolder: true, prefix: '@' }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ],
    
    // Production optimization
    'sonarjs/cognitive-complexity': ['error', 15],
    'complexity': ['error', 10],
    'max-depth': ['error', 4],
    'max-params': ['error', 5],
    
    // Unicorn adjustments for Express
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: { 
          req: true, 
          res: true, 
          err: true, 
          env: true,
          params: true,
          config: true
        }
      }
    ],
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': [
      'error',
      { 
        cases: { 
          camelCase: true,
          pascalCase: true 
        },
        ignore: [
          '*.config.js',
          'express.js'
        ]
      }
    ],
    
    // Airbnb overrides for Express patterns
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    
    // JavaScript-specific rules
    'consistent-return': 'off',
    'no-use-before-define': ['error', { functions: false }]
  },
  overrides: [
    {
      files: ['**/*.controller.js'],
      rules: {
        'max-classes-per-file': 'off',
        'class-methods-use-this': 'off'
      }
    },
    {
      files: ['**/*.test.js', '**/__tests__/**'],
      rules: {
        'sonarjs/no-identical-functions': 'off',
        'sonarjs/cognitive-complexity': 'off',
        'jest/no-mocks-import': 'off',
        'node/no-unpublished-require': 'off'
      }
    },
    {
      files: ['src/routes/**/*.js'],
      rules: {
        'max-params': 'off',
        'express/use-error-handler': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
        moduleDirectory: ['node_modules', 'src/']
      }
    },
    'express/ignore': [
      'middleware/errorHandler.js'
    ]
  }
};
