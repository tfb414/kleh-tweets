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
  var options = {
    url: 'https://www.reddit.com/api/v1/access_token',
    headers: {
      'User-Agent': 'tweet_bot:v1.0'
    },
    auth: auth
  };

  var post_data = {
    grant_type: 'password',
    username: process.env.REDDIT_USER_NAME,
    password: process.env.REDDIT_USER_PASS,
  }

  callback = (error, response, body) => {
    if(error) {console.log(error);}
      var info = JSON.parse(body);
      console.log(info);
  };
  request.post(options, callback);

  console.log("Ending");
}

main();
