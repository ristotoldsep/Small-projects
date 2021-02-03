const webpack = require('webpack');
const path = require('path');
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: { //By default webpack automatically resolve js files. But it doesn't resolve jsx files by default. To be able to do that you have to manually configure your webpack config:
        extensions: [
            '.js',
            '.jsx'
        ]
    }
}
module.exports = config;