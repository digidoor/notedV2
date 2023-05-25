const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
// Event fields
    content: {
        type: String,
        required: true 
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;