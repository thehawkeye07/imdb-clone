const webpack = require('webpack');

module.exports = {
    // Your webpack configuration
    entry: './src/index.js',
    output: {
        // Output configuration
    },
    plugins: [
        // DefinePlugin allows you to create global constants which can be configured at compile time
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'), // Example: Set NODE_ENV to production
            'process.env.API_KEY': JSON.stringify(process.env.API_KEY) // Example: Pass API_KEY from the environment
        })
    ]
};
