//A dependency
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./app/public'));
app.use(express.static('./app/data'))

//Routes to be used

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

//set up port to listen

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });