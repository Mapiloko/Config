module.exports = {
	module: {
		rules: [
			{
				test: /\.scss$/i,
				exclude: /\.module\.scss$/i,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: {
								mode: "icss",
							},
						},
					},
					{
						loader: "sass-loader",
					},
				],
			},
			{
				test: /\.module\.scss$/i,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: {
								mode: "local",
							},
						},
					},
					{
						loader: "sass-loader",
					},
				],
			},
		],
	},
};
