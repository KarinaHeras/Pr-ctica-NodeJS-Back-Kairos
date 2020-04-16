//Configure Babel, create at root project a file called "babel.config.js" with the following content:

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
  ],
};