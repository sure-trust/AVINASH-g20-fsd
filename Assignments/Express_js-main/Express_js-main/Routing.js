var express = require('express');
var app = express();
app.get('/nithish', function(req, res) {
    
res.send('hello nithish');

});

app.post('/tejaswini', function(req,res) {

res.send('hello tejaswini');

});

app.get('/', function(req,res){

 res.send('hello world this is the landing page');

});

app.listen(3000);

