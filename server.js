const Twitter = require("twitter");
var contador = 0;
var client = new Twitter({
  consumer_key: "uYeFMwzDK9QS8hUxFDxh0mFRZ",
  consumer_secret: "z1F6QFA2hnKqRtpHav1qOcwAGbUG7Ywb6hKlFAdUl9UjMS9IRJ",
  access_token_key: "1290702262130683906-23rJxLMOaPJLljBraJSOowokWPHzDf",
  access_token_secret: "ZR20WDN8msMMAMQabDq4cIHvy4cXmw8UlTR2jCBGDcTsj",
});

var myVar = setInterval(myTimer, 10000);

function myTimer() {
  client
    .post("statuses/update", {
      status: "PRUEBA TWITTER SERVER EXTERNO " + contador,
    })
    .then(function(tweet) {
      console.log(tweet);
    })
    .catch(function(error) {
      console.log(error);
    });
  contador++;
}
