const express = require('express');
const mongoose = require('mongoose');
const port = 8080;

const app = new express();
const db = require('./config/keys').mongoURI;

// Write the first route
app.get('/', (req, res) => res.send("Hi there!"));
// Listen to the app
app.listen(port, () => console.log(`Listening on port: ${port}`));
// Test connection with DB
mongoose.connect(db)
        .then(() => console.log('DB connection successful!'))
        .catch(err => console.log(err));

