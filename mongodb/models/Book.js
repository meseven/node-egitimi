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
        maxlength: [20, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır.'],
        minlength: [2, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.']
        // unique: true
    },
    comments: [{ message: String }],
    year:{
      type: Number,
      max: 2030,
      min: 1700
    },
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