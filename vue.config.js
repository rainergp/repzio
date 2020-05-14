// const SentryCliPlugin = require('@sentry/webpack-plugin');

process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  css: {
    sourceMap: true,
  },
  configureWebpack: {
    devtool: "source-map",
    // plugins: [
    //   new SentryWebpackPlugin({
    //     include: '.',
    //     ignoreFile: '.sentrycliignore',
    //     ignore: ['node_modules', 'webpack.config.js'],
    //     configFile: 'sentry.properties'
    //   })
    // ]
  }
}
