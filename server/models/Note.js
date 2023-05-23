const mongoose = require('mongoose');

const { Schema } = mongoose;

const noteSchema = new Schema({
// note fields
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
