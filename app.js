require(`dotenv`).config();
const express = require(`express`);
const rateLimit = require(`express-rate-limit`);
const bodyParser = require(`body-parser`);

// app variables
const app = express();
const port = 8080;

// static files - css, images, js, json (for news)
app.use(express.static(`public`));
app.use(`/css`, express.static(__dirname + `public/css`));
app.use(`/images`, express.static(__dirname + `public/images`));
app.use(`/js`, express.static(__dirname + `public/js`));
app.use(`/json`, express.static(__dirname + `public/json`));


// allows only 1 api request per second
const limiter = rateLimit({
  windowMs: 1000,
  max: 1,
});
app.use(limiter);


// templating engine
app.set(`views`, `./src/views`);
app.set(`view engine`, `ejs`);

// bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// routes - news api
const homeRouter = require(`./src/routes/home`);
const searchRouter = require(`./src/routes/search`);
const creditsRouter = require(`./src/routes/credits`);

// for now
app.use(`/`, homeRouter);
app.use(`/search`, searchRouter);
app.use(`/credits`, creditsRouter);

// server activation
app.listen(port, () => console.log(`Listening on port ${port}`));
