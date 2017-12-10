const express = require('express');
const app = express();

const signIn = require('./routes/signIn');
const signUp = require('./routes/signUp');

app.use('/user', signIn);
app.use('/', signUp);

app.listen(3000, () => {
    console.log("express server çalıştı.");
});