var HtmlWebpackPlugin = require('html-webpack-plugin');
require("babel-polyfill")
var path  = require('path')
module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    resolve: {extensions: ['.ts','.tsx','.js']},
    module: {
        rules: [
          { 
            test: /\.tsx?$/,
            exclude: /node_modules/, 
            loader: 'babel-loader'
          },
          {
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
          }, 
          {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
          },
          {
            test: /\.(sass|scss)$/,
    
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" },
              { loader: "sass-loader" }
            ]
          },
          {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 100000
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'})
      ]
      ,
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist','vcare'),
      },
}