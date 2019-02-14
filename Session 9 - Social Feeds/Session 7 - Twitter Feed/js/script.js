// A simple example to get my latest tweet and write to a HTML element with
// id "example1". Also automatically hyperlinks URLS and user mentions and
// hashtags.

//More examples can be found at: https://github.com/jasonmayes/Twitter-Post-Fetcher

var configTagged = {
  "id": '963082487806222337',
  "domId": '',
  "maxTweets": 5,
  "enableLinks": true,
  "showImages": false,
  "customCallback": handleTweets //This will call the function that we have declared below, to handle the layout that the tweets are displayed as
};
twitterFetcher.fetch(configTagged);

function handleTweets(tweets) {
    var x = tweets.length;
    var n = 0;
    var element = document.getElementById('example2');
    var html = '<div class="container"><div class="row row-eq-height mb-5">';
    while(n < x) {
      html += '<div class="col-4">' + tweets[n] + '</div>';
      n++;
    }
    html += '</div></div>';
    element.innerHTML = html;
}
