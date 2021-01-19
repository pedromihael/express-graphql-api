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
          '@typeDefs': './src/typeDefs',
          '@resolvers': './src/resolvers',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
