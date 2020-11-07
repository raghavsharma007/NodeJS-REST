const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// connection to mongodb "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"
mongoose.connect('mongodb://localhost/projdata');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', routes);

// Error handling
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
})


app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port 3000`);
});