const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader",
                      "css-loader",
                      "sass-loader"
                     ],
            }
        ]
    }
};