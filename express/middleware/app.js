const express = require('express');
const app = express();

const user = require('./routes/user');
const profile = require('./routes/profile');

app.use('/user', user);
app.use('/profile', profile);

app.listen(3000, () => {
    console.log("express server çalıştı.");
});