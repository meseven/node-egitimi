

const isLogin = app.use((req, res, next) => {
    const loginStatus = false;

    if (loginStatus)
        next();
    else
        res.send('lütfen giriş yapın.');
});