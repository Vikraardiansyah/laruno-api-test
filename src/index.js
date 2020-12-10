const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const RouteNavigator = require('./routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', RouteNavigator);

const server = app.listen(8080, () => {
  console.log(`You're connected`);
});
