var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './public/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public/'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass?includePaths[]=./node_modules')},
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
}