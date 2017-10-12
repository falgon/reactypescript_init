const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
	filename: 'bundle.js',
	path: __dirname + '/dist'
    },
    devtool: 'source-map',
    resolve: {
	extensions: ['.ts','.tsx','.js','.json']
    },
    module:{
	rules:[
	    { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
	    { test: /\.scss?$/, loaders: ['style-loader','css-loader','sass-loader'] },
	    { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
	    { test: /\.(jpg|jpeg)$/, use: [{ loader: 'file-loader', options: { outputPath: './assets/', publicPath: __dirname + '/assets', emitFile: true } }] }
	],
	loaders: [
	    { exclude: '/node_modules/' },
	],
    },
    plugins: [
	new webpack.DefinePlugin({
	    'process.env.NODE_ENV': JSON.stringify('production')
	}),
	new webpack.optimize.UglifyJsPlugin({
	    compress: {
		warnings: false	
	    }
	})
    ],
};
