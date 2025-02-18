const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: "./js/index.js",
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		publicPath: "/", // This ensures assets are loaded correctly
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new HtmlWebpackPlugin({
			template: "./index.html",
			chunks: ["main"],
			filename: "index.html",
		}),
	],

	devServer: {
		static: "./dist",
		port: 9000,
	},
};
