var qiniu = require('qiniu');
var express = require('express');
var app = express();

app.configure(function() {
    app.use(express.static(__dirname + '/public'));
});

app.get('/token', function(req, res, next) {
    var token = uptoken.token();
    if (token) {
        res.json({
            uptoken: token
        })
    }
});

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html')
});

qiniu.conf.ACCESS_KEY = '0MLvWPnyya1WtPnXFy9KLyGHyFPNdZceomLVk0c9';
qiniu.conf.SECRET_KEY = 'o5itRgrXxoD6XQ5wDWKQ7h--eWvWyQVKcsIURuEV';

var uptoken = new qiniu.rs.PutPolicy('qiniu-plupload');


app.listen(3000);

console.log(qiniu);

console.log('server runing at localhost:' + 3000)
