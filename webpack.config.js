const path = require('path');

module.exports = {
    entry: './resources/react/index.jsx',
    watchOptions: {
		ignored: /node_modules/
	},
    output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'js/')
	},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};