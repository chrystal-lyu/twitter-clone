const express = require('express');
const Twitter = require('twitter')
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

require('dotenv').config()

const client = new Twitter ({
  consumer_key: process.env.REACT_APP_TWITTER_API_KEY,
  consumer_secret: process.env.REACT_APP_TWITTER_API_SECRET,
  access_token_key: process.env.REACT_APP_TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/tweets', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  const params = { q: 'coronavirus', count: '20' };
  client.get('search/tweets', params, function(error, tweets, response) {
    res.send(tweets.statuses)
  });
})

app.listen(port, function () {
  console.log(`App listening on port ${port}!`)
})
