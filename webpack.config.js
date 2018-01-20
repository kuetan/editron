module.exports = {
    target:"electron",
    node:{
	__dirname:false,
	__filename:false
    },
    resolve: {
	extensions:[".js",".jsx"]
    },
    module:{
	rules: [
	    {
		test: /\.jsx?$/,
		exclude:/node_modules/,
		loader:"babel-loader"
	    },
	    { 
		test:/\.css$/,
		loader:["style-loader","css-loader?css-loader?modules"]
	    }
	]
    },
    entry:{
	"main/index":"./src/main/index.js",
	"render/app":"./src/renderer/app.jsx"
    },
    output:{
	filename:"dist/[name].js"
    },
    devtool:"source-map"
};
