const express = require('express');
const proxy = require('http-proxy-middleware');
const config = require('./config');

let app = express();

app.use('/apigateway', (request, response) => {
  response.send("Showing API Gateway");
})

let proxyForAllNotes = proxy({
  target : config.NOTES_GET_URL,
  pathRewrite : {
    '^/notes/' : '/api/v1/notes/'
  }
});

app.use('/notes/',proxyForAllNotes);

let proxyForAllUsers = proxy({
  target : config.USERS_GET_URL,
  pathRewrite : {
    '^/users/' : '/api/v1/users/'
  }
});

app.use('/users/',proxyForAllUsers);

let proxyForWeb = proxy({
  target : config.WEB_URL,
  pathRewrite : {
    '^/web/' : '/web/'
  }
});

app.use('/web/',proxyForWeb);

app.use((request, response) => {
  response.status(404).send({
    "message" : "Not Found."
  })
})

module.exports = app;