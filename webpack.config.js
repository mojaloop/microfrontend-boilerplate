const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true, // React Router
    contentBase: path.join(__dirname, 'dist'),
    port: 3002,
    host: '0.0.0.0',
    compress: true,
    hot: true,
    publicPath: '/',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3002/', // Where it's going to be expected to be published for being externally loaded
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
    alias: {
      'ui-components': '@modusbox/modusbox-ui-components/dist',
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|js)x?$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|js)x?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app',
      library: { type: 'var', name: 'app' },
      filename: 'app.js',
      exposes: {
        App: './src/Injector',
      },
      shared: [
        'react',
        'react-dom',
        'react-redux',
        'react-router-dom',
      ], // The modules that are being shared across the apps
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
