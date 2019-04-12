var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//calling burger object from burger.js to render out to index.handlebar
router.get("/", function(req, res) {
     burger.selectAll((data) => {
       res.render("index", {burgers: data});
     });
   });
   
   // creating burgers
   router.post("/api/burgers", (req, res) => {
    burger.insertOne(req.body.burger_name, (data) =>{
      res.json({ id: data.insertId });
     });
   });
   
   // update burger
   router.put("/api/burgers/:id", (req, res) => {
     burger.updateOne(req.params.id, (result) => {
       if(result.changedRows === 0) {
        return res.status(404).end();
       } else {
         res.status(200).end();
       }
     });
   });


module.exports = router;