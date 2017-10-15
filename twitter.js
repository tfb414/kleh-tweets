const Twitter = require('twitter');
const env = require('dotenv').config();

function checkTweets() {
    console.log('init ran')

    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        bearer_token: process.env.TWITTER_BEARER_TOKEN
    });



    // client.get('search/tweets', { q: 'node.js' }, function (error, tweets, response) {
    //     console.log(tweets);
    // });

    return client.get('statuses/user_timeline', { screen_name: 'rustupdates' })
        .then((tweets) => {
            return tweets[0]['text'];
        }).catch(console.log)



}




module.exports = {
    checkTweets: checkTweets
}
