const path = require("path");

module.exports = {
    entry: {
        app: "./src/theme.js"
    },
    output: {
        path: path.resolve(__dirname, "src"),
        filename: "theme.min.js"
    },
    module: {
        loaders: [{
            test: /\.js?/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["env"]
            }
        }]
    }
}