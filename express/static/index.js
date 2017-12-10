const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.static('other-public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log("express server çalıştı.");
});