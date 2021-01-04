let express = require('express');
let bodyParser = require('body-parser');
let path = require('path')
let db = require('../database');

let port = 2440;
let app = express();
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../public')))

app.listen(port, () => {
  console.log(`Server is currently jamming on http://localhost:${port}`)
});

