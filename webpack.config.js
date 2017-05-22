var path = require('path');
var webpack = require('webpack');
console.log(path.resolve(__dirname, 'app/www/build'));
module.exports = {
  entry: {
    app: [
      './src/index.js'
  ]},

  output: {
    path: path.resolve(__dirname, 'app/www/build'),
    publicPath: "/assets/",
    filename: 'bundle.js',
  },

  devServer: {
    publicPath: [
      path.join(__dirname, "app/www/static"),
      path.join(__dirname, "assets")
    ],
    publicPath: "/assets/",
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/, loader: 'style-loader!css-loader'
    }, { 
      test: /\.less$/, loader: 'style-loader!css-loader!less-loader'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
}
