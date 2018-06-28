module.exports = function (webpackConfig, env) {
  webpackConfig.module = {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: [
          'transform-runtime',
          ["import", {"libraryName": "antd-mobile", "libraryDirectory": 'es', "style": "css"}]
        ],
        presets: ['es2015', 'react', 'stage-2']
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.scss$/,
      loader: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(jpg|png|svg)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 25000,
        },
      },
    }]
  };

  webpackConfig.devServer = {
    historyApiFallback: true
  };
  return webpackConfig;
};
