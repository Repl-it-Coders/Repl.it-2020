const express = require('express');//Set up the express module
const app = express();

app.get('/', async (req, res) => {
  console.log("Yeeet, [DEBUG] we running in home page");
  res.sendFile(__dirname + '/templates/index.html')
});

app.get('/posts', async (rec, res) => {
  console.log("We in the posts page [DEBUG]")
  res.sendFile(__dirname + '/templates/posts.html')
})

app.listen(3000, () => {
  console.log("Listening on port 3000.")
})