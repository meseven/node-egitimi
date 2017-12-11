const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
* type
* default
* required
* unique
* */

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    comments: [{ message: String }],
    meta: {
        votes: Number,
        favs: Number
    },
    published: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('book', BookSchema);