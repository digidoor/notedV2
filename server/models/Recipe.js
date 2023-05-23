const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
// Recipe fields
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
