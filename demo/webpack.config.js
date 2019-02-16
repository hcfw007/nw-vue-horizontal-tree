const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        app: path.join(__dirname, 'index.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname)
    },
    devServer: {
        contentBase: path.join(__dirname),
        port: 8080,
        hot: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    mode: 'development',
}