const webpack = require('webpack')
const config = require('./webpack.config')

const compiler = webpack(config)

compiler.run((err, stats) => {
    if (err || stats.hasErrors()) {
        const info = stats.toJson()
        if (stats.hasErrors()) {
            console.error(info.errors.toString())
          }
          if (stats.hasWarnings()) {
            console.warn(info.warnings.toString())
          }
    } else {
        console.log('build successfully')
    }
})