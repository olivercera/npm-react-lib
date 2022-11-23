const { resolve } = require("path");
module.exports = {
    mode: 'development',
    // target: 'web',
    entry: "./index.ts",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    context: resolve(__dirname, "src"),
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.tsx?$/],
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"],
            // },
            // {
            //     test: /\.(scss|sass)$/,
            //     use: ["style-loader", "css-loader", "sass-loader"],
            // },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     use: [
            //         "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
            //         "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
            //     ],
            // },
        ],
    },
}