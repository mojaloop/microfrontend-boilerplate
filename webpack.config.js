const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const { DEV_PORT, PUBLIC_PATH } = process.env;
const { parsed } = require('dotenv').config({
  path: './.env',
});

const config = {
  DEV_PORT: DEV_PORT || parsed.DEV_PORT,
  PUBLIC_PATH: PUBLIC_PATH || parsed.PUBLIC_PATH,
}

const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  entry: './src/index',
  devtool: 'cheap-module-source-map',
  devServer: {
    disableHostCheck: true,
    // Enable gzip compression of generated files.
    compress: false,
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // It will still show compile warnings and errors with this setting.
    clientLogLevel: 'none',
    // By default files from `contentBase` will not trigger a page reload.
    watchContentBase: true,
    // Enable hot reloading server. It will provide WDS_SOCKET_PATH endpoint
    // for the WebpackDevServer client so it can learn when the files were
    // updated. The WebpackDevServer client is included as an entry point
    // in the webpack development configuration. Note that only changes
    // to CSS are currently hot reloaded. JS changes will refresh the browser.
    hot: true,
    // Use 'ws' instead of 'sockjs-node' on server since we're using native
    // websockets in `webpackHotDevClient`.
    transportMode: 'ws',
    // Prevent a WS client from getting injected as we're already including
    // `webpackHotDevClient`.
    injectClient: false,
    historyApiFallback: true, // React Router
    contentBase: path.join(__dirname, 'dist'),
    port: config.DEV_PORT,
    host: '0.0.0.0',
    publicPath: '/',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: config.PUBLIC_PATH, // Where it's going to be expected to be published for being externally loaded
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-redux': path.resolve(__dirname, 'node_modules', 'react-redux'),
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|js)x?$/,
        use: 'eslint-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                require.resolve('@babel/plugin-proposal-class-properties'),
                require.resolve('@babel/plugin-proposal-object-rest-spread'),
                require.resolve('babel-plugin-syntax-async-functions'),
                require.resolve('@babel/plugin-transform-runtime'),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(s)?css$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // SCSS
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [{ removeViewBox: false }],
          },
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
    }),
    new ModuleFederationPlugin({
      name: 'app',
      library: { type: 'var', name: 'app' },
      filename: 'app.js',
      exposes: {
        './App': './src/Injector',
        './Menu': './src/Menu',
      },
      shared: [
        'react',
        'react-dom',
        'react-redux',
        'react-router-dom',
        'redux',
        'redux-saga',
        'history',
        '@reduxjs/toolkit',
        '@modusbox/react-components',
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ].filter(Boolean),
};
