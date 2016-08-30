/**
 * Created by spray on 16-8-29.
 */

const request = require('request');

var r = request.defaults({
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
    }
    //,'proxy':'http://120.198.248.97:80'
});

module.exports = r;