const path = require("path");
const webPackHTMLPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.jsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js",".jsx"]
    },
    //Configuração para o webpack "escutar" e atualizar a cada save...
    devServer: {
        contentBase: path.resolve(__dirname, "public")
    },
    //Incluído para dinamizar o import do bundle.js
    plugins:[new webPackHTMLPlugin({template: path.resolve(__dirname, "public", "index.html")})],
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