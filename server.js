// ______________________________________________________________________________
// DEPENDENCIES - npm packages + database
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const express = require("express"); //might not need here
// const mysql = require("mysql"); //this is now in connection.js
const connection = require("./config/connection.js");
const exphbs = require("express-handlebars");

// ______________________________________________________________________________
// MYSQL - database connection -- now in connection.js- OK?
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

// ______________________________________________________________________________
// EXPRESS - server setup
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
const app = express();

const PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ______________________________________________________________________________
// HANDLEBARS - routing
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Use Handlebars to render the main index.html page with the todos in it.
// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM plans;", function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     res.render("index", { plans: data });
//   });
// });

// // Create a new todo
// app.post("/todos", function(req, res) {
//   connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
//     if (err) {
//       return res.status(500).end();
//     }

//     // Send back the ID of the new todo
//     res.json({ id: result.insertId });
//     console.log({ id: result.insertId });
//   });
// });

// // Retrieve all todos
// app.get("/todos", function(req, res) {
//   connection.query("SELECT * FROM plans;", function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     res.json(data);
//   });
// });

// // Update a todo
// app.put("/todos/:id", function(req, res) {
//   connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.changedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//   });
// });

// // Delete a todo
// app.delete("/todos/:id", function(req, res) {
//   connection.query("DELETE FROM plans WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.affectedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//   });
// });

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
