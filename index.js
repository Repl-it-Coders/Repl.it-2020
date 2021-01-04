// Wait, what do we do for this one?
// I'm going to go ahead and work on the suggestions thing... This is AmazingMech2418 by the way
// Okay. Suggestions work. I did a method with no client-side JS, but we may need it if we want to improve the UI. We need a DB though. Currently, it just logs to the console. Also maybe Repl Auth?

// Whippingdot - Bro We need the suggestion to output in a file or a db. Console is fine for now but we need to work on making it output in the file. Also Repl auth is a feature we need, I will try to make it work.

/**
 * gosh the css sucks
 * and what is this project for?
 * and what should i do?
 * -rohil
 * Whippingdot: CSS is great
 * this project is for repl.it
 * you have to make the suggestions be sent to a db or file, you have to make the suggestions page show the name of person and their suggestion below the form, and you have to make it so one suggestions per person. You will now the person cause of repl auth
 **/

const express = require("express");
const app = express();

// Finally got this line to work, so /static leads to any necessary static content. ~ SixBeeps
app.use("/static", express.static(__dirname + "/static"));

app.use('/js', express.static(__dirname + '/js'));

app.use("favicon.ico", express.static(__dirname + "/favicon.ico"));

app.get("/", async (_, res) => {
	console.log(`Signing in [DEBUG]`);
	res.sendFile(`${__dirname}/views/replAuth2.html`);
});

app.get("/home", async (_, res) => {
	console.log(`Yeeet, [DEBUG] we running in home page`);
	res.sendFile(`${__dirname}/views/home.html`);
});

app.get("/posts", (_, res) => {
	console.log("We in the posts page [DEBUG]");
	res.sendFile(`${__dirname}/views/posts.html`);
});

app.get("/suggestions", (_, res) => {
	console.log(
		"Hello, is this the debug center, yes, we are running the suggestions"
	);
	res.sendFile(`${__dirname}/views/suggestions.html`);
});

app.post("/api/suggestions", require("body-parser")(), (req, res) => {
	console.log(
		"Hello, is this the debug center, yes, we are running the suggestions API"
	);
	let body = req.body;
	console.log("Username:", body.username); // Should we authenticate with Repl Auth? -- Yes we should ~ Whippingdot
	console.log("Suggestion:", body.suggestion);

	// We need to add a DB. ReplDB maybe? -- I don't know, we need a db or a file ~ Whippingdot
	res.redirect("/suggestions");
});

app.get("/timeline", (_, res) => {
	console.log("Hello, we debugging the TIMELINE!!");
	res.sendFile(`${__dirname}/views/timeline.html`);
});

app.listen(8080, () => {
	console.log("Listening on port 8080.");
});
