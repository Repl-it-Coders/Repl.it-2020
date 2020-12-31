const express = require("express");
const app = express();

// Finally got this line to work, so /static leads to any necessary static content. ~ SixBeeps
app.use('/static', express.static(__dirname + '/static'));

app.get("/", async(req, res) => {
  console.log("Yeeet, [DEBUG] we running in home page");
  res.sendFile(`${__dirname }/templates/home.html`);
});

app.get("/posts", (_, res) => {
  console.log("We in the posts page [DEBUG]");
  res.sendFile(`${__dirname }/templates/posts.html`);
});

app.get("/suggestions", (_, res) => {
  console.log("Hello, is this the debug center, yes, we are running the suggestions");
  res.sendFile(`${__dirname }/templates/suggestions.html`);
});

app.listen(8080, () => {
  console.log("Listening on port 8080.");
});