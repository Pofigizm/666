import mongoose from 'mongoose';
import historyFallback from 'connect-history-api-fallback';
import express from 'express';
import http from 'http';

import { transform } from 'babel-core';
transform('code', {
  plugins: ['node-env-inline'],
});

import config from '../config';
import dataServer from './transport';

// --- DATA SERVER

mongoose.connect(config.dbHost, (err) => {
  if (err) {
    throw new Error('db connection error!');
  }
  dataServer(config.socketPort);
});

// --- STATIC FILE  SERVER

const app = express();
const httpServer = new http.Server(app);

app.use(historyFallback());

if (config.hotReload) {
  // --- DEV HOT RELOAD SERVER
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackDevConfig = require('../config/webpack.dev');
  const compiller = webpack(webpackDevConfig);

  app.use(webpackDevMiddleware(compiller, {
    publicPath: webpackDevConfig.output.publicPath,
    stats: {
      colors: true,
      chunkModules: false,
    },
  }));
  app.use(webpackHotMiddleware(compiller));
} else {
  // --- PROD FILE SERVER
  app.use('/', express.static(__dirname + '/../static'));
}

app.use('/enviroment.js', (req, res) => {
  res.send(`
    window.ENVIROMENT_SOCKET_PORT = ${config.socketPort};
  `);
});

httpServer.listen(config.httpPort, () => {
  console.log('File server listening on *:' + config.httpPort);
});

