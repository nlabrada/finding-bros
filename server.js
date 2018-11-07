// getting all that required stuff
var express = require("express");
var bodyParser = require("body-parser");

// initializing express
var app = express();
var PORT = process.env.PORT || 3000;

// for bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
