//dependencies
const express = require("express");
const fs = require("fs");

const app = express();
const port =  3000;
const mainDir = path.join(__dirname, "/public")

//express
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/notes", function(req,res) {
    Response.sendFile(path.join(mainDir, "notes.html"));
})
