var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Resume = require('./api/models/resumeModel'),
  bodyParser = require('body-parser'),
  path = require('path'),
  Insects = require('./api/models/insectsModel');

  let routes = require('./api/routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/resumeDB', {useNewUrlParser: true, useUnifiedTopology: true});

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(express.static(path.join(__dirname,'../frontend/build')));
app.use('/img', express.static(path.join(__dirname,'../frontend/public/img')));
app.use('/whos_that', express.static(path.join(__dirname,'../frontend/public/whos_that')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(allowCrossDomain);

routes(app);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../frontend/build/index.html'))
})

app.listen(port);

console.log(`Server started on ${port}`);