const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3004;
const Property = require('../database/Property.js')


app.use(bodyParser.json());
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})