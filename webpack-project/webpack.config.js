module.exports = {
    //WHERE DO WE WANT WEBPACK TO START LOOKING THROUGH OUR FILES
    entry: [
        './src/index.js'
    ],
    //WHERE DO WE WANT TO BUNDLE THE FILES?
    output: {
        path: __dirname + '/dist', //the name of this dir & to dist folder
        publicPath: '/',
        filename: 'bundle.js'
    },
    //IF WE ARE WORKING LOCALLY
    devServer: {
        contentBase: './dist'
    },
    //FOR SENDING EVERYTHING THROUGH BABEL COMPILER FIRST (transpiles newer ES syntaxes to ES5 that all browsers understand)
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['eslint-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}