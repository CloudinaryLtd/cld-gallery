module.exports = {
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'h',
        pragmaFrag: 'Fragment'
      }
    ]
  ]
};
