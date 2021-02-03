const express = require("express");
const app = express();
const fs = require('fs');

app.use("/static", express.static(__dirname + "/static"));

app.use('/js', express.static(__dirname + '/js'));

app.use("favicon.ico", express.static(__dirname + "/favicon.ico"));

app.get("/login", async (_, res) => {
	console.log(`Signing in [DEBUG]`);
	res.sendFile(`${__dirname}/views/replAuth2.html`);
});

app.get("/", async (req, res) => {
  let username = req.get("X-REPLIT-USER-NAME");
  let loginURL = '#';
  if(!username || username.length == 0) {
    username = "Log In";
    loginURL = "/login";
  }
	console.log(`Yeeet, [DEBUG] we running in home page`);
	res.send(fs.readFileSync(`/${__dirname}/views/home.html`).toString().split("{{USERNAME}}").join(username).split("{{LOGIN_URL}}").join(loginURL));
});

app.get("/posts", (req, res) => {
  let username = req.get("X-REPLIT-USER-NAME");
  let loginURL = '#';
  if(!username || username.length == 0) {
    username = "Log In";
    loginURL = "/login";
  }
	console.log("We in the posts page [DEBUG]");
	res.send(fs.readFileSync(`/${__dirname}/views/posts.html`).toString().split("{{USERNAME}}").join(username).split("{{LOGIN_URL}}").join(loginURL));
});

app.get("/suggestions", (req, res) => {
  
  let username = req.get("X-REPLIT-USER-NAME");
  let loginURL = '#';
  let message = '';
  if(!username || username.length == 0) {
    username = "Log In";
    loginURL = "/login";
    message = "<h3>You must log in before submitting this form</h3>";
  }
	console.log(
		"Hello, is this the debug center, yes, we are running the suggestions"
	);
	res.send(fs.readFileSync(`/${__dirname}/views/suggestions.html`).toString().split("{{USERNAME}}").join(username).split("{{LOGIN_URL}}").join(loginURL).split("{{MESSAGE}}").join(message));
});

app.post("/api/suggestions", require("body-parser")(), (req, res) => {
	console.log(
		"Hello, is this the debug center, yes, we are running the suggestions API"
	);
	let body = req.body;
	console.log("Username:", req.get("X-REPLIT-USER-NAME")); // Should we authenticate with Repl Auth? -- Yes we should ~ Whippingdot
	console.log("Suggestion:", body.suggestion);

	// We need to add a DB. ReplDB maybe? -- I don't know, we need a db or a file ~ Whippingdot
	res.redirect("/suggestions");
});

app.get("/timeline", (req, res) => {
  let username = req.get("X-REPLIT-USER-NAME");
  let loginURL = '#';
  if(!username || username.length == 0) {
    username = "Log In";
    loginURL = "/login";
  }
	console.log("We're in the timeline page [DEBUG]");
	res.send(fs.readFileSync(`/${__dirname}/views/timeline.html`).toString().split("{{USERNAME}}").join(username).split("{{LOGIN_URL}}").join(loginURL));
});

app.get("/home", async (_, res) => {
	console.log(`Yeeet, [DEBUG] we running in home page`);
 	res.sendFile(`${__dirname}/views/home.html`);

});


app.listen(8080, () => {
	console.log("Listening on port 8080.");
});
