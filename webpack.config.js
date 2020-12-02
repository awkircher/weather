const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: { 
    fallback: {
      path: require.resolve("path-browserify"),
      fs: require.resolve("path-browserify"),
      util: require.resolve("util/"),
      url: require.resolve("url/"),
      http: require.resolve("stream-http"),
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
      assert: require.resolve("assert/"),
      constants: require.resolve("constants-browserify"),
      crypto: false,
      https: false,
      vm: false,
      os: false,
    }
  },
  plugins: [
    new Dotenv({
      path: './src/.env',
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    })
  ]
};