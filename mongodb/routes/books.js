const express = require('express');
const router = express.Router();

// Models
const Book = require('../models/Book');

router.post('/new', function(req, res, next) {
    const book = new Book({
        title: "Node.JS",
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

router.get('/search', (req, res) => {
    Book.find({ }, 'title comments', (err, data) => {
       res.json(data);
    });
});

router.get('/searchOne', (req, res) => {
    Book.findOne({ title: "Udemy" }, (err, data) => {
        res.json(data);
    });
});

router.get('/searchById', (req, res) => {
    Book.findById('5a2fa341710f3f3d8f161125', (err, data) => {
        res.json(data);
    });
});

module.exports = router;
