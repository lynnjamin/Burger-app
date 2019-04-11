var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

//calling burger object from burger.js to render out to index.handlebar
router.get("/", function(req, res) {
     burger.selectAll((data) => {
       var handlebarObject = {
         burgers: data
       };
       console.log(handlebarObject);
       res.render("index", handlebarObject);
     });
   });
   

   // creating burgers
   router.post("/api/burgers", function(req, res) {
     burger.create(
       //create the column, create values
       ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
       // Send back the ID of the new quote
       res.json({ id: result.insertId });
     });
   });
   
   // update burger by setting conditions
   router.put("/api/burgers/:id", (req, res) => {
     var condition = "id = " + req.params.id;
   
     console.log("condition", condition);
   
     burger.update({
       devoured: req.body.sleepy
     }, condition, function(result) {
       if (result.changedRows == 0) {
         // If no rows were changed, then the ID must not exist, so 404
         return res.status(404).end();
       } else {
         res.status(200).end();
       }
     });
   });
   
  //  router.delete("/api/cats/:id", function(req, res) {
  //    var condition = "id = " + req.params.id;
   
  //    cat.delete(condition, function(result) {
  //      if (result.affectedRows == 0) {
  //        // If no rows were changed, then the ID must not exist, so 404
  //        return res.status(404).end();
  //      } else {
  //        res.status(200).end();
  //      }
  //    });
  //  });


module.exports = router;