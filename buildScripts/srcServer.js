import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';      // configuring the web server to hadle the builder webpack
import config from '../webpack.config.dev'; // config file for webpack

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);  // this is a referance to the webpack compiler

// here we tell express to use the web compiler
app.use (require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen (port, function(err) {
  if(err) {
    console.log (err);
  } else {
    open('http://localhost:' + port);
  }
});
