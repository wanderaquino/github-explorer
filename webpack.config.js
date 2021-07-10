const path = require("path");
const webPackHTMLPlugin = require("html-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";
const reactRefreshWebpackPlug = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    mode: isDevelopment ? "development" : "production",
    //Configuração para tornar o código mais "friendly" para debug --Dev
    devtool: isDevelopment ? "eval-source-map": "source-map",
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
        contentBase: path.resolve(__dirname, "public"),
        hot: true
    },
    //Incluído para dinamizar o import do bundle.js
    plugins:[
        isDevelopment && new reactRefreshWebpackPlug(),
        new webPackHTMLPlugin({template: path.resolve(__dirname, "public", "index.html")})
        
    ].filter(Boolean),
    //Como a aplicação vai se comportar quando importar cada tipo de arquivo...
    module: {
        rules: [
            {
                test: /\.jsx$/,
                //Não fazer conversão dos arquivos da node_modules
                exclude: /node_modules/,
                use: {  
                    loader: "babel-loader",
                    options: {
                        plugins: [isDevelopment && require.resolve("react-refresh/babel")].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                //Não fazer conversão dos arquivos da node_modules
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}