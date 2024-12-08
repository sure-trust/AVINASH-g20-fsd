var express = require('express');

var app = express();

app.get('/ch', function(req, res) {
    res.send('Hello guys this is Nithish');
});

app.listen(3000, function() {
    console.warn('server is running');
});


