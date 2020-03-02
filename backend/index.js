var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Resume = require('./api/models/resumeModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://104.43.208.92/resumeDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./api/routes/resumeRoutes');
routes(app);

app.listen(port);

console.log(`Server started on ${port}`);