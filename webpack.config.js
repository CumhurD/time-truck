const path = require('path');

module.exports = {
    entry: {
        popup: "./src/popup.js",
        background: "./src/background.js"
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }],
        }]
    }
};