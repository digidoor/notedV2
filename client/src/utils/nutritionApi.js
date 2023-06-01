const search = (query) =>
  axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f77fd2f488d240c483a26996e70388ac&number=10&query='${query}'&instructionsRequired=true&addRecipeInformation=true`);


// var recipeTitle = data.results[i].title;
// var sourceUrl = data.results[i].sourceUrl;
// var recipeImage = data.results[i].image;

  export default search;
