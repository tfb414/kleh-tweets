const twitter = require('./twitter.js')

function main() {
  let latestTweet;
  setInterval(() => {
    twitter.checkTweets().then((tweet) => {

    })
  }, 1000);

  //logic for is it the same tweet
  //post to reddit
  //deal with potential errors




}

main();
