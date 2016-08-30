/**
 * Created by spray on 16-8-29.
 */

const request = require('../lib/request');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    console.log(req.query.redict);

    //req.pipe(request(req.query.redict)).pipe(res);
    request(req.query.redict).pipe(res);

});

module.exports = router;
