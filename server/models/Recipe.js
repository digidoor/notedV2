const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
// Recipe fields
    url: {
        type: String,
        required: true,
        trim: true
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
