const express = require('express');
const getNotes = require('./api/v1/notes');

let app = express();

app.get('/api/v1/notes/',getNotes);

module.exports = app;