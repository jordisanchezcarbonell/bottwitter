const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
var Twit = require("twit");
express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

var valor = 0;
var T = new Twit({
  consumer_key: "uYeFMwzDK9QS8hUxFDxh0mFRZ",
  consumer_secret: "z1F6QFA2hnKqRtpHav1qOcwAGbUG7Ywb6hKlFAdUl9UjMS9IRJ",
  access_token: "1290702262130683906-23rJxLMOaPJLljBraJSOowokWPHzDf",
  access_token_secret: "ZR20WDN8msMMAMQabDq4cIHvy4cXmw8UlTR2jCBGDcTsj",
});

T.get(
  "account/verify_credentials",
  {
    include_entities: false,
    skip_status: true,
    include_email: false,
  },
  onAuthenticated
);

function onAuthenticated(err, res) {
  if (err) {
    throw err;
  }
 setInterval(function() {
    PostTeeet(valor);
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();

    console.log((horaImprimible = hora + " : " + minuto + " : " + segundo));
  }, 10000);
  
  
}

function onTweeted(err, reply) {
  if (err !== undefined) {
    console.log(err);
  } else {
    console.log("Tweeted: " + reply.text);
  }
  valor++;
}

function PostTeeet(valor) {
  T.post(
    "statuses/update",
    {
      status: "Prueba de tweeet local FOLLW @fgcstream " + valor,
    },
    onTweeted
  );
}
