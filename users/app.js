const express = require('express');
const getUser = require('./api/v1/users')

let app = express();

app.get('/api/v1/users/', getUser.getAllUsers);

app.get('/api/v1/users/:userId', getUser.getUserByUserID);

module.exports = app;