const mongoose = require('mongoose');

const NotesSchama = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserData'
    },
    title: {
        type: String,
        maxlength: 50,
    },
    teg: {
        type: String,
        maxlength: 30
    },
    dis: {
        type: String
    }
})

const NotesModel = mongoose.model('notes', NotesSchama);
module.exports = NotesModel;