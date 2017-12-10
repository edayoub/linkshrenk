var express = require('express');
var router = express.Router();
var model=require('../public/models/db');
/* GET users listing. */
router.get('/:id', function(req, res, next) {
    model.findById(req.params.id,function (err,site) {
       if(!err){
           res.render("site",{site:site});
       }else{
           res.render("error");
       }
    });

});

module.exports = router;
