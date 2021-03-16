const express = require('express');

// db
const { connect } = require('./db');

// lib middlewares
const cors = require('cors');
const bodyParser = require('body-parser');

// custom middlewares
const applyXFrame = require('./middlewares/applyXFrame');
const redirectToHttps = require('./middlewares/redirectToHttps');
const redirectToTrailingSlash = require('./middlewares/redirectToTrailingSlash');
const redirectToCorrectBlogUrl = require('./middlewares/redirectToCorrectBlogUrl');
const redirectToCustomerUrl = require('./middlewares/redirectToCustomerUrl');

// config
const config = require('./config');

// routers
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');


function bootstrap() {
  const app = express();
  
  /**
   * MongoDB connection
   */
  connect(config.DATABASE_URL);

  /**
     * External middlewares
     */
  app.use(cors());
  app.use(bodyParser.json(config.bodyParserJSONConfig));
  app.use(bodyParser.urlencoded(config.bodyParserURLEncodedConfig));

  /**
     * Enable trust proxy
     */
  app.enable('trust proxy');

  // custom middlewares
  app.use(applyXFrame);
  app.use(redirectToHttps);
  app.use(redirectToTrailingSlash);
  app.use(redirectToCorrectBlogUrl);
  app.use(redirectToCustomerUrl);

  // routers
  app.use(webRouter);
  app.use('/api', apiRouter);

  return app;
}

module.exports = bootstrap();
