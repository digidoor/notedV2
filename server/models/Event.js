const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
// Event fields
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
