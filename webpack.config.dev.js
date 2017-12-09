const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/main.js',//入口
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: [
                    { loader: "vue-loader" }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test:/\.(ttf|png|gif|svg)$/,
                use:[
                    {loader:"file-loader"}
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./template.html',//参照文件
            filename:'index.html' //生成的index.html
        })
    ]
}