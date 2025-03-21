const path = require('path'); // utiliza CommomJS como padrão do node

module.exports = {
    mode: "development", // ele não é minificado (diminuir o arquivo)
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public", "assets", "js"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/, // esse arquivo termina com .js
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"]
                }
            }
        }]
    },
    devtool: "source-map" // mapeia no arquivo original
}