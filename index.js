const express = require("express");
fs = require("fs");
const app = express();

//root api which shows all the files of the current directory

app.get("/", (req, res) => {
  fs.readdir("./", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

//api to readfile the name of the file should be specified

app.get("/readfile:file", (req, res) => {
  fs.readFile(`${req.params.file}.txt`, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    res.send(data);
  });
});

//api for creating file

app.post("/createfile", (req, res) => {
  const fileName = Date.now();
  fs.writeFile(`${fileName}.txt`, Date(), function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send("Successfully Created File..!!");
    }
  });
});

const port = process.env.PORT || 5000;
// creating a server and listening

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
