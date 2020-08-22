module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true
        },
        corejs: 3,
        useBuiltIns: 'entry'
      }
    ]
  ]
}