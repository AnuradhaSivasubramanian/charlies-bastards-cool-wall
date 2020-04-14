var express = require("express");
var router = express.Router();
const db = require("../database/models/index");
const tech_list = db.tech_list;

//get for fetching the vote list
router.get('/' , function (req, res, next){
    tech_list
    .findAll()
    .then(user => res.send(user))
    .catch(err => console.error(err));
    
}); 

module.exports = router;