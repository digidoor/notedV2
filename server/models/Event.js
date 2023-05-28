const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
// Event fields
    title: {
        type: String,
        required: true 
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
    },
    description: {
        type: String
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;