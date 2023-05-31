const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
// Recipe fields
    title: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
