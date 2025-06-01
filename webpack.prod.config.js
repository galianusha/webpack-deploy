const path = require("path");
const glob = require("glob");
const Htmlplugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const  MinicssExtractPlugin = require("mini-css-extract-plugin");
const  CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {PurgeCSSPlugin} = require("purgecss-webpack-plugin");

const PATHS = {
    src:path.join(__dirname,"src")
}
module.exports={
    mode:'production',
    entry:{
        index:"./src/index.js",
        explore:'./src/explore.js'
    },
    output:{
        filename:'[name].[contenthash].js',
        path:path.resolve(__dirname,"dist"),
        assetModuleFilename:'asset/[hash][ext]',
        clean:true,
    },
    optimization:{
        minimizer:[
            `...`,
            new CssMinimizerPlugin()
        ],
        splitChunks:{
            chunks:'all'
        }
    },
    plugins:[
        new PurgeCSSPlugin({
            paths:glob.sync(`${PATHS.src}/**/*`,{nodir:true}),
            only:["explore"],
            safelist:["unsed-css"]
        }),
        new MinicssExtractPlugin({
            filename:'[name].[contenthash].css',
        }),
        new Htmlplugin({
            template: "./src/index.html",
            chunks:["index"],
            filename:'index.[contnenthash].html'
        }),
        new Htmlplugin({
            template: "./src/explore.html",
            chunks:["explore"],
            filename:'explore.[contenthash].html',
            inject:'body',
        }),
        new CopyPlugin({
            patterns:[
                {
                    from:path.resolve(__dirname,"src/assets/images"),
                    to:path.resolve(__dirname,"dist","assets/images"),
                }
            ]
        }),
        new MinicssExtractPlugin({
           filename:'[name].[contenthash].css'
        })
    ],
    module:{
rules:[
    {
    test:/.(jpg|png|jpg|jpeg|svg)/,
    type:'asset/resource'
    },
    {
        test:/\.(css)$/,
        use:[MinicssExtractPlugin.loader,"css-loader"]
    },
    {
        test:/\.(scss)$/,
        use:[MinicssExtractPlugin.loader,"css-loader","sass-loader"]
    },
    {
        test:/\.(ttf|woff|woff2|eot|otf)$/,
        type:"asset/resource"
    }
]
    }
}