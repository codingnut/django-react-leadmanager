module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modeuls/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}