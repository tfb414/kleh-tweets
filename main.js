const twitter = require('./twitter.js')
const request = require('request');
const env = require('dotenv').config();

function main() {
  //let latestTweet;
  //setInterval(() => {
  //  twitter.checkTweets().then((tweet) => {
    //logic for is it the same tweet
    //post to reddit
    //deal with potential errors
  //})
  //}, 1000);

  var auth = {
    'user': process.env.REDDIT_CLIENT_ID,
    'password': process.env.REDDIT_CLIENT_SECRET,
    'sendImmediately': false
  }
  var post_data = {
    grant_type: 'password',
    username: process.env.REDDIT_USER_NAME,
    password: process.env.REDDIT_USER_PASS,
  }
  var options = {
    url: 'https://www.reddit.com/api/v1/access_token',
    auth: auth,
    headers: {
      'User-Agent': 'tweet_bot:v1.0'
    },
    form: post_data
  };


  request.post(options, function (error, response, body) {
    if(error) {console.log(error);}

    var info = JSON.parse(body)['access_token'];
    console.log(info);

    var auth = {
      'bearer': info
    }

    var options = {
      url: 'https://oauth.reddit.com/api/v1/me',
      auth: auth,
      headers: {
        'User-Agent': 'tweet_bot:v1.0'
      }
    };

    request.get(options, function (error, response, body) {
      if(error) {console.log(error);}

      var info = JSON.parse(body);
      console.log(info);
    });
  });

  console.log("Ending");
}

main();
