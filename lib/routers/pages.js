var router = require('express').Router();

router.route('/one')
    .get(function(req, res, next){
        res.render('one');
    });

router.route('/two')
    .get(function(req, res, next){
        res.render('two');
        });

router.route('/three')
    get(function(req,res,nest){
        res.render('three')
    });


module.exports = router;
