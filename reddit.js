const env = require('dotenv').config();
const rp = require('request-promise');

function callReddit(subreddit, tweet) {
  getBearerToken().then((token) => {
    submitLink(token, subreddit, tweet);
  });
}

function submitLink(token, subreddit, tweet) {
  console.log(token + ' submitLike')
  var options = {
    method: 'POST',
    url: 'https://oauth.reddit.com/api/submit',
    auth: {
      bearer: token
    },
    headers: {
      'User-Agent': 'tweet_bot:v1.0'
    },
    form: {
      sr: subreddit,
      kind: 'link',
      url: tweet['link'],
      title: tweet['title'] + ' (commit by ' + tweet['committer'] + ')'
      // text: "my text",
      // Should be tweet['title'] or something
    }
  }

  rp(options).then((response) => {
    console.log(response);
  }).catch((err) => { console.log(err) });
}

function getBearerToken() {
  // Set up some auth
  var auth = {
    'user': process.env.REDDIT_CLIENT_ID,
    'password': process.env.REDDIT_CLIENT_SECRET,
    'sendImmediately': false
  }

  // Set up the required post data
  var post_data = {
    grant_type: 'password',
    username: process.env.REDDIT_USER_NAME,
    password: process.env.REDDIT_USER_PASS,
  }

  // Set up the POST
  var options = {
    method: 'POST',
    url: 'https://www.reddit.com/api/v1/access_token',
    auth: auth,
    headers: {
      'User-Agent': 'tweet_bot:v1.0'
    },
    form: post_data
  };

  // Make the POST for the bearer token
  return rp(options)
    .then((body) => {
      return JSON.parse(body)['access_token'];
    })
    .catch((err) => console.log(err));
}

module.exports = {
  callReddit: callReddit
};
