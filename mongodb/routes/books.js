const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Models
const Book = require('../models/Book');

router.post('/new', function(req, res, next) {
    const book = new Book({
        title: "Üçüncü",
        year: 1600,
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
    Book.find({
        category: {
            $exists: true
        }
    }, 'title comments category', (err, data) => {
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

router.put('/update', (req, res) => {
    Book.update(
        {
            published: false
        },
        {
            published: true,
            title: 'deneme title'
        },
        {
            // multi: true
            upsert: true
        },
        (err, data) => {
            res.json(data);
        });
});

router.put('/updateById', (req, res) => {
    Book.findByIdAndUpdate(
        '5a2fa770b487f042afcd2dcc',
        {
            title: 'hello world',
            'meta.favs': 99
        },
        (err, data) => {
            res.json(data);
        });
});

/*
* findOne() -> remove()
* findOneAndRemove()
* remove()
* */

router.delete('/remove', (req, res) => {
   Book.remove({ published: true  }, (err, data) => {
       res.json(data);
   });
});

// sorting
router.get('/sort', (req, res) => {
    Book.find({ }, (err, data) => {
        res.json(data);
    }).sort({ 'meta.favs': -1, 'title': 1 });
});

// limit and skip
router.get('/limitandskip', (req, res) => {
    Book.find({ }, (err, data) => {
        res.json(data);
    })
    .skip(1)
    .limit(2);
});


// aggregate
router.get('/aggregate', (req, res) => {
    Book.aggregate([
        {
            $match: {
                published: true
            }
        },
        /*{
            $group: {
                _id: "$category",
                total: { $sum: 1 }
            }
        }*/
        {
            $project: {
                title: 1,
                meta: 1
            }
        },
        {
            $sort: { title: -1 }
        },
        {
            $limit: 5
        },
        {
            $skip: 1
        }
    ], (err, result) => {
        res.json(result);
    });
});

// aggregate $lookup
router.get('/aggregate-lookup', (req, res) => {
    Book.aggregate([
        {
          $match: {
              _id: mongoose.Types.ObjectId('5a2fc7a4408fb762c91538d6')
          }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
                as: 'user'
            }
        },
        {
            $unwind: '$user'
        },
        {
            $project: {
                title: 1,
                user: '$user'
            }
        }
    ], (err, result) => {
        res.json(result);
    });
});

module.exports = router;
