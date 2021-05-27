const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: './dist',
    port: 3000,
  },

  devtool: 'inline-source-map',

  mode: 'development',

  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(js)$/,
        exclude: [/node_modules/, /dist/],
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.css'],
  },

  plugins: [new HtmlWebpackPlugin({
    templateContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Batouuz</title>
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    `,
  })],
}
