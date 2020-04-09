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

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/tweets', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  const params = { 
    q: 'coronavirus', 
    count: '20', 
    result_type: "popular", 
    lang: "en" 
  };
  client.get('search/tweets', params, function(error, tweets, response) {
    if (!tweets) {
      console.log(error)
    }
    res.send(tweets.statuses);
  });
});

app.get('/trends', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  const params = { id: '2487956' }; // San Francisco's WOEID
  client.get('trends/place', params, function(error, tweets, response) {
    if (!tweets) {
      console.log(error)
    }
    res.send(tweets[0].trends);
  });
});

app.get('/search', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  const params = { 
    q: req.query.search_query,
    count: '20',
    result_type: 'popular'
  };
  client.get('search/tweets', params, function(error, tweets, response) {
    if (!tweets) {
      console.log(error)
    }
    res.send(tweets.statuses);
  });
});

app.get('/post_status', function (req, res, next) {
  const token = req.query.user_token;
  const secret_token = req.query.user_secret;
  const new_status = req.query.status;

  const clientAuth = new Twitter ({
    consumer_key: process.env.REACT_APP_TWITTER_API_KEY,
    consumer_secret: process.env.REACT_APP_TWITTER_API_SECRET,
    access_token_key: token,
    access_token_secret: secret_token
  })

  res.header("Access-Control-Allow-Origin", "*");
  const params = {
    status: new_status 
  };
  clientAuth.post('statuses/update', params, function(error, tweets, response) {
    if (!tweets) {
      console.log(error)
    }
    res.send(tweets);
  })
})

app.get('/my_timeline', function (req, res, next) {
  const token = req.query.user_token;
  const secret_token = req.query.user_secret;

  const clientAuth = new Twitter ({
    consumer_key: process.env.REACT_APP_TWITTER_API_KEY,
    consumer_secret: process.env.REACT_APP_TWITTER_API_SECRET,
    access_token_key: token,
    access_token_secret: secret_token
  })

  res.header("Access-Control-Allow-Origin", "*");
  const params = {};
  clientAuth.get('statuses/home_timeline', params, function(error, tweets, response) {
    if (!tweets) {
      console.log(error)
    }
    res.send(tweets)
  })
})

app.get('/my_tweets', function (req, res, next) {
  const token = req.query.user_token;
  const secret_token = req.query.user_secret;

  const clientAuth = new Twitter ({
    consumer_key: process.env.REACT_APP_TWITTER_API_KEY,
    consumer_secret: process.env.REACT_APP_TWITTER_API_SECRET,
    access_token_key: token,
    access_token_secret: secret_token
  })

  res.header("Access-Control-Allow-Orgin","*");
  const params = {};
  clientAuth.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!tweets) {
      console.log(error)
    }
    res.send(tweets)
  })
})

app.listen(port, function () {
  console.log(`App listening on port ${port}!`)
});
