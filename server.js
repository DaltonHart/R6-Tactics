//SECTION -------------------------------EXTERNAL MODULES
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
// protection
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
// logging
const morgan = require('morgan');

//SECTION -------------------------------INTERNAL MODULES
const RESFORMATTER = require('./middleware/response');
const validator = require('./middleware/key_validate');
const routes = require('./routes');

//SECTION -------------------------------INSTANCED MODULES
const app = express();
require('dotenv').config();

//SECTION -------------------------------CONFIGURATION VARIABLES
const PORT = process.env.PORT;
const LIMIT = rateLimit({
  max: 10000, // max requests
  windowMs: 24 * 60 * 60 * 1000, // 1 day
  message: 'Too many requests'
});

//SECTION --------------------------------MIDDLEWARE
app.use(bodyParser.json());
// limit requests
app.use(LIMIT);
// custom response formatter
app.use(RESFORMATTER);
// security headers
app.use(helmet());
// rotection for No-sql injections
app.use(mongoSanitize());
// session config
app.use(
  session({
    // store session info into db
    store: new MongoStore({
      url: process.env.MONGODB_URI
    }),
    secret: process.env.SESSION,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // two weeks
    }
  })
);

//SECTION -------------------------------CONFIGURATION VARIABLES
const options = {
  origin: `*`,
  optionsSuccessStatus: 200
};
app.use(cors(options));
// adding morgan to log HTTP requests
app.use(morgan('tiny'));

//SECTION ------------------------------ROUTES
app.use('/files', express.static('files'));

app.use('/', routes.views);
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1', validator, routes.api);

//SECTION ------------------------------Start Server
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}..`);
});
