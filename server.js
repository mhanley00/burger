// ______________________________________________________________________________
// DEPENDENCIES - npm packages + database
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const express = require("express"); //might not need here
var serveStatic = require('serve-static');
// const connection = require("./config/connection.js");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burger_controller.js");

// ______________________________________________________________________________
// EXPRESS + STATIC - server setup
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public")); //setting up our static server

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ______________________________________________________________________________
// HANDLEBARS
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); //boilerplate handlebars

// ______________________________________________________________________________
// ROUTING
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
app.use(routes);


// ______________________________________________________________________________
// LOCAL HOST - listening
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});


