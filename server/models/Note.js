const mongoose = require('mongoose');

const { Schema } = mongoose;

const noteSchema = new Schema({
    // note fields
    content: {
        type: String,
        required: true,
        maxlength: 250
    },
    // created_at: {
    //     type: Date,
    //     default: Date.now
    // }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;