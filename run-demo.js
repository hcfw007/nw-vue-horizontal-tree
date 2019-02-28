const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./demo/webpack.config.js')

const compiler = webpack(config)
const devServerOptions = Object.assign({}, config.devServer, {
    stats: {
      colors: true,
    },
})

const server = new WebpackDevServer(compiler, devServerOptions)

server.listen(8080, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8080')
})