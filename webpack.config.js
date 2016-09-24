var path    = require('path');
var webpack = require('webpack');
// var glob = require('glob'); //added  by yoni
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'sourcemap',
  // entry: {},
  // entry: {
  //   app: "./app.js",
  //   angularBundle: ["angular", "angular-ui-router"],
  // },
  entry: {
    'angular-ui-module': [
      'angular-ui-router',
      'bootstrap'
    ]
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.svg(\?.*$|$)/, loader: 'file-loader?name=/img/[name].[ext]' },
       { test: /\.(png|gif|jpe?g)$/, loader: 'file?name=/img/[name].[ext]' },
       { test: /\.(eot|ttf|woff2?)(\?.*$|$)/, loader: 'file?name=/fonts/[name].[ext]'},
       { test: /\.scss$/, loader: 'style!css?sourceMap!sass?sourceMap' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [


    new webpack.optimize.CommonsChunkPlugin("angular-ui-module", "angular-ui-module.bundle.js"),


    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: false
    }),

        // Pro-tip: Order matters here.
        // new webpack.optimize.CommonsChunkPlugin(['vendor'], '[name].bundle.js')
    // new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")


    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
