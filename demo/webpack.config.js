const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.css$/,
            loader: [
              'vue-style-loader',
              'css-loader'
            ]
        }]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
        }
    },
    mode: 'development',
}