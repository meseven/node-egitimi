const express = require('express');
const router = express.Router();

// Models
const Book = require('../models/Book');

router.post('/new', function(req, res, next) {
    const book = new Book({
        title: "Udemy Node.JS",
        published: true,
        comments: [
            { message: "Harika bir kitap." },
            { message: "Ben pek beğenmedim." }
        ],
        meta: {
            votes: 12,
            favs: 104
        }
    });

    book.save((err, data) => {
       if (err)
           res.json(err);

        res.json(data);
    });
});

module.exports = router;
