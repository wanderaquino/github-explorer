const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.jsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js",".jsx"]
    },
    //Como a aplicação vai se comportar quando importar cada tipo de arquivo...
    module: {
        rules: [
            {
                test: /\.jsx$/,
                //Não fazer conversão dos arquivos da node_modules
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}