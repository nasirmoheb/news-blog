const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const newsRouter = require('./routes/newsRoute');
const myNewsRouter = require('./routes/myNewsRoute');

const app = express();
dotenv.config();

app.use(express.json());

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

// Templating Engine

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));

const DB=process.env.DATABASE.replace('<password>',process.env.PASSWORD);
console.log(DB);
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Database connection successful...');
  });
// Routes
app.use('/', newsRouter);
app.use('/api/news', myNewsRouter);

// Listen on port 5000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
