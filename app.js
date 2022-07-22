const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = ["Task1", "Task2", "Task3"];
let workItems = ["Work1", "Work2"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))

app.get("/", function(req, res) {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    listTitle: day,
    newListItem: items
  });
});

app.post("/", function(req, res) {
  console.log(req.body);
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work", newListItem: workItems});
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server running on port 3000!");
});
