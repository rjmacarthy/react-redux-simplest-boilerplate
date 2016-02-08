var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    watchOptions: {
        aggregateTimeout: 300,
        poll: 300
    },
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3000');
});
