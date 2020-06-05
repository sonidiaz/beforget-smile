const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";
  return {
    entry: "./src/js/main.js",
    output: {
      filename: "[name].[hash].bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    optimization:{
      splitChunks:{
        chunks: "all"
      }
    },
    mode: argv.mode,
    devtool: isDevelopment ? 'eval-cheap-source-map' : "source-map",
    devServer: {
      contentBase: './dist',
      hot: true
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
      }
    },
    module:{
      rules:[
        {
          test: /\.scss|.css$/,
          use: [isDevelopment ? "vue-style-loader" :  MiniCssExtractPlugin.loader,
            'css-loader', 'sass-loader',
          ],
          // use: [MiniCssExtractPlugin.loader, "css-loader"] 
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin(
        {
          title: "Smile Bfg",
          template: "./src/index.html"
       }
      )
    ]
  }
}