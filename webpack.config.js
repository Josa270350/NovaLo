const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: "assets/[hash][ext][query]"
    },

    module: {
        rules: [

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: "asset/resource"
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    devServer: {
        static: "./dist",
        open: true,
        hot: true,
        port: 8080
    }

};