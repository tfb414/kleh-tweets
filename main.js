const env = require('dotenv').config();
const twitter = require('./twitter.js')
const request = require('request');
const rp = require('request-promise');
const reddit = require('./reddit.js');

function main() {
  // Change back to setInterval to release the kraken
  // reddit.callReddit('bottesting', tweet)
  setInterval(() => {
    twitter.checkTweets('rustupdates').then((tweet) => {

      checkAndPost(tweet);

    }).catch((err) => { console.log(err) })
  }, 5001);

  function checkAndPost(tweet, lastTweet) {
    if (tweet['title'].split(" ")[0] !== "merge") {
      reddit.callReddit('playrust', tweet);
    }



  }
}

main();
