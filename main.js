const env = require('dotenv').config();
const twitter = require('./twitter.js')
const request = require('request');
const rp = require('request-promise');
const reddit = require('./reddit.js');

function main() {
  let latestTweet;

  // Change back to setInterval to release the kraken
  reddit.callReddit('bottesting', 'tweet')
  //setTimeout(() => {
  //  twitter.checkTweets().then((tweet) => {
  //  reddit.callReddit('bottesting', tweet)
  //  })
  //}, 1000);


  
}

main();
