const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

new Dotenv({
  path: './.env', // Path to .env file (this is the default)
  safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
});