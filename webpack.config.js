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
		loader:
		
}

]
}
}
