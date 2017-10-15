const Twitter = require('twitter');

function init() {
    console.log('init ran')

    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.
        // bearer_token: process.env.TWITTER_BEARER_TOKEN
    });

    // client.get('search/tweets', { q: 'node.js' }, function (error, tweets, response) {
    //     console.log(tweets);
    // });

    client.post('statuses/update', { status: 'I Love Twitter' })
        .then(function (tweet) {
            console.log(tweet);
        })
        .catch(function (error) {
            throw error;
        })
}




module.exports = {
    init: init
}
