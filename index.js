const express = require("express");
const app = express();

// Finally got this line to work, so /static leads to any necessary static content. ~ SixBeeps
app.use('/static', express.static(__dirname + '/static'));
// My try at what SixBeeps did. Doesn't seem to work
app.use('/orgLogo.ico', express.static(__dirname + '/orgLogo.ico'));

app.get("/", async(req, res) => {
  console.log("Yeeet, [DEBUG] we running in home page");
  res.sendFile(`${__dirname }/views/home.html`);
});

app.get("/posts", (_, res) => {
  console.log("We in the posts page [DEBUG]");
  res.sendFile(`${__dirname }/views/posts.html`);
});

app.get("/suggestions", (_, res) => {
  console.log("Hello, is this the debug center, yes, we are running the suggestions");
  res.sendFile(`${__dirname }/views/suggestions.html`);
});

app.get("/timeline", (_, res) => {
  console.log("Hello, we debugging the TIMELINE!!");
  res.sendFile(`${__dirname }/views/timeline.html`)
});

app.listen(8080, () => {
  console.log("Listening on port 8080.");
});