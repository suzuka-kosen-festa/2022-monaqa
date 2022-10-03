module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['warn', 'info', 'error'],
      },
    ],
    // console.logが残っていればwarn
    'prefer-arrow-callback': 'error',
    // arrow functionを許可
    'prefer-const': 'error',
    // const推奨
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    // 未使用変数はエラー
    'import/prefer-default-export': 'off',
  },
  overrides: [
    // 一部ルールを除外する
    {
      files: ['src/pages/**/*.tsx'],
      // pagesのdefault exportは仕方ないので除外
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/*.tsx'],
      // componentの戻り値の型定義の記述は必須にしない
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
          },
        ],
      },
    },
    {
      files: ['*.stories.tsx'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: false,
          },
        ],
      },
    },
  ],
}
