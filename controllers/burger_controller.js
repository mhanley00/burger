// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at 
// the end of your file.

const express = require("express");
const router = express.Router();
const burger = require("../models/burgers.js");
//burgers.js has database functions

// router.post("/", function(req, res){
//     burger.all()
// })


module.exports = router;