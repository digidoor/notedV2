const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const noteSchema = new Schema({
    // note fields
    title: {
        type: String,
        required: false,
        maxlength: 250
    },
    
    content: {
        type: String,
        required: true,
        maxlength: 250
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: User,
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;