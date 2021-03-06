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
	//    { enforce: 'pre', test: /\.tsx?$/, exclude: /node_modules/, loader:'tslint-loader' } // FIXME: https://github.com/wbuchwalter/tslint-loader/issues/57
	],
	loaders: [
	    { exclude: '/node_modules/' },
	],
    },
    externals:{
	'react': 'React',
	'react-dom': 'ReactDOM'
    },
};
