const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: {
        'tree.global': path.join(__dirname, 'src', 'entry-global-component'),
        'tree.single': path.join(__dirname, 'src', 'entry-single-component')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'umd',
    },
    plugins: [
        new CleanWebpackPlugin(),
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
    mode: "development",
}