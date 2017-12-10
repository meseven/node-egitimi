const fs = require('fs');

fs.unlink('demo.txt', (err) => {
    if (err)
        throw err;

    console.log("dosya silindi");
});