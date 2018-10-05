// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at 
// the end of your file.

const express = require("express");
const router = express.Router();
var serveStatic = require('serve-static');
const burger = require("../models/burgers.js");
//burgers.js has database functions

// router.get("/", function (req, res) {
//     res.redirect("/");
// });

//show me all da burgers
router.get("/", function (req, res) {
    burger.all(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//route to create a new burger
router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

//route to change a burger status from avail to devoured
router.post("burgers/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

//export this pup
module.exports = router;