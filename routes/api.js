var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var db = mongodb.MongoClient.connect('mongodb://localhost/test1');

router.get('/c1',function(req,res,next){
    db.then(function(db){
        return db.collection('c1').find().toArray();
    }).then(res.json.bind(res)).catch(function(err){
        console.log(err);
        next(err);
    });
});
router.post('/c1',function(req,res,next){
    var c1 = req.body;
    db.then(function(db){
        return db.collection('c1').insertOne(c1);
    }).then(function(){
        res.json(c1);
    }).catch(function(err){
        console.log(err);
        next(err);
    });
});

module.exports = router;
