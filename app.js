const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, function() {
  console.log("server is running on port 3000");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
console.log(req.body.topicInput);

const query = req.body.topicInput;
const apiKey = "e64e32714b864219825539534c377a76"
const url = "https://newsapi.org/v2/everything?q=" + query + "&from=2021-09-22&to=2021-09-22&sortBy=popularity&apiKey=" + apiKey;

https.get(url, function(response) {
  console.log(response.statusCode);
  console.log(url);

  request(url, function(error, response, body) {
    //Check for error
    if (error) {
      return console.log('Error:', error);
    }

    //Check for right status code
    if (response.statusCode !== 200) {
      return console.log('Invalid Status Code Returned:', response.statusCode);
    }

    console.log(body); // Here is the response body

  });

  // response.on("data", function(data) {
  //   const newsData = JSON.parse(data);
  //
  // for (var i = 0; i < 20; i++) {
  //   res.write("Source: " + newsData.articles[0].source.name);
  //   res.write("<hr>");
  //   res.send();

  // res.send(newsData);

  // });

});
});
// });

// API KEY
// e64e32714b864219825539534c377a76
