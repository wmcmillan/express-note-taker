//dependencies
const fs = require("fs");

//set variables
let db = fs.readFileSync("./db/db.json","utf8");
dbData = JSON.parse(db);
console.log(dbData);

//export routing
module.exports = function(app) {

    const writeJSON = data => {
        data = JSON.stringify(data);
        fs.writeFileSync("./db/db.json", data, function(err) {
            if (err) {
                return console.log(err);
            }
        })
    };

    app.get("/api/notes", function(req,res) {
        res.json(dbData);
    });

    app.post("/api/notes", function(req,res) {
        let newNote = req.body;
        let ID = (dbData.length).toString();
        newNote.id = ID;
        dbData.push(newNote);
        writeJSON(dbData);
        res.json(newNote);
        console.log("Saved new note to database json file");
    });

    app.get("/api/notes/:id", function(req,res) {
        let currentID = req.params.id;
        res.json(dbData[currentID]);
        console.log(`You are viewing your note of ID ${currentID}`);
    });

    app.delete("/api/notes/:id", function(req,res) {
        let currentID = req.params.id;
        for (var i=0;i<dbData.length;i++) {
            if (dbData[i].id === currentID.toString()) {
                dbData.splice(i,1);
                console.log(`Deleting note of ID ${i}`);
                res.send(dbData[i]);
                break;
            }
        }
        writeJSON(dbData);
    });
}
