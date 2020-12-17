const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  console.log("Yeeet, [DEBUG] This the debug section. You reached the home page");
  res.sendFile("templates/index.html")
})

app.listen( )
