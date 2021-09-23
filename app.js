const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
  console.log("server is running on port 3000");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  console.log(req.body.topicInput);

  const query = req.body.topicInput;
  const apiKey = "e64e32714b864219825539534c377a76"
  const url = "https://newsapi.org/v2/everything?q=" + query +"&from=2021-09-22&to=2021-09-22&sortBy=popularity&apiKey=" + apiKey;

  https.get(url, function(response){
    console.log(response.statusCode);
  });
});

// API KEY
// e64e32714b864219825539534c377a76
