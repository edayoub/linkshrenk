var express = require('express');
var mongoos=require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
var model=require('../public/models/db');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/',function (req,res) {
    model.create({site:req.body.str},function (err,site) {
        if(!err){
            res.send({
                id:site._id,
                error:false});

        }else{
            res.send({error:true});
        }
    });
});

module.exports = router;
