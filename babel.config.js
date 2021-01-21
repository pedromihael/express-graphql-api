module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@domain': './src/domain',
          '@useCases': './src/useCases',
          '@infrastructure': './src/infrastructure',
          '@entities': './src/entities',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
