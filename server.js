//dependencies
const express = require("express");
const fs = require("fs");

//express app
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"))

//data parsing 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//route to server
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

//listener
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
})