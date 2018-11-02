var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: 'public' });
});

router.get('/horoscope', function(req, res, next) {
    console.log("IN /horoscope");
    var url = "https://aztro.sameerkumar.website/?";
    var both = req.query['q'].split(",");
    var sign = both[0];
    var day = both[1];
    url += 'sign=' + sign;
    url += '&day=' + day;
    //url += "?format=json";
    console.log(url);

    var request = require('request');

    var options = {
        url: url,
        method: 'POST'
    };

    request(options).pipe(res);

    //request(url).pipe(res);
});

module.exports = router;
