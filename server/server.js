const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3004;
const Property = require('../database/Property.js');


app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  next();
})



app.get('/api/nearbyplaces/:id', (req, res) => {
  const { id } = req.params;
  Property.find({ id })
    .then((property) => {
      const { zip } = property[0];
      Property.find()
        .then((allProperties) => {
          const nearbyPlaces = allProperties.filter((prop) => prop.zip === zip);
          res.status(200).json({ nearbyPlaces });
        });
    })
    .catch((err) => res.status(404).json({ err }));
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
