const Twitter = require('twitter');
const env = require('dotenv').config();


function checkTweets(twitterHandle) {
    const twitterName = twitterHandle

    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        bearer_token: process.env.TWITTER_BEARER_TOKEN
    });



    // client.get('search/tweets', { q: 'node.js' }, function (error, tweets, response) {
    //     console.log(tweets);
    // });

    return client.get('statuses/user_timeline', { screen_name: twitterName })
        .then((info) => {
            // console.log(info[0])
            return {
                link: generateLink(info[0]['id_str'], 'bradybattlebot'),
                title: getTitle(info[0]['text']),
                committer: getCommitter(info[0]['text'])
            }
        });



}

function generateLink(id, twitterName) {
    return 'https://twitter.com/' + twitterName + '/status/' + id;
}

function getTitle(text) {
    return text.split('\n')[0]

}

function getCommitter(text) {
    return text.split('\n')[2].split(" ")[0]
}



module.exports = {
    checkTweets: checkTweets
}
