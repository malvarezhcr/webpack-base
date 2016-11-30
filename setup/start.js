import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import open from 'open';

import webpackConfig from '../webpack.config.js';

// inline flag
webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");

// default port
const port = 8080;
// webpack
const compiler = webpack(webpackConfig);

const serverConfig = {
                        contentBase: './public',
                        hot: true,
                        publicPath: webpackConfig.output.publicPath,
                        stats: { colors: true }
                     };
// create server
const server = new WebpackDevServer(compiler, serverConfig);
// listen port and open window
server.listen(port, 'localhost', () => {
  open(`http://localhost:${port}`);
});

