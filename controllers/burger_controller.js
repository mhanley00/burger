// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at 
// the end of your file.

const express = require("express");
const router = express.Router();
const burger = require("../models/burgers.js");
//burgers.js has database functions

router.get("/", function(req,res){
    burger.all(function(data){
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("burgers/:id", function(req,res){
    burger.update(req.params.id
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


module.exports = router;