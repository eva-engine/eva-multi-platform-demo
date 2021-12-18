const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path')

module.exports = function getConfig(target) {
  return {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
      path: target,
      filename: 'main.js',
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2015',
          },
          include: [path.resolve(__dirname, '../src')],
          exclude: [/node_modules/],
        },
        {
          test: /.css$/,
  
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'esbuild-loader',
              options: {
                loader: 'css',
                minify: true,
              },
            },
          ],
        },
      ],
    },
  
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      fallback: { path: require.resolve('path-browserify') },
    },
  
    devServer: {
      port: 9002,
      compress: true,
    },
  
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../index.html'),
        title: 'cramped room of death',
      }),
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin({
        root: target,
        cleanStaleWebpackAssets: false,
        cleanOnceBeforeBuildPatterns: ['main.js'],
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../static'),
          to: path.join(target, "static"),
          ignore: ['.*'],
        },
      ]),
    ],
    optimization: {
      minimizer: [
        new ESBuildMinifyPlugin({
          css: true,
        }),
        new TerserPlugin(),
      ],
    }
  };
  
}
