const express = require('express');
const app = express();
const port=3000;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Welcome', message: 'Hi everyone, Im Nithish Kumar from Andhra Pradesh.'});
});
app.get('/about');

app.listen(port);
