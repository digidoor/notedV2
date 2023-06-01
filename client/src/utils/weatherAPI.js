const search = (query) =>
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=imperial&appid=301abb42e89fddd7a250ac02d53fe894`);


// var recipeTitle = data.results[i].title;
// var sourceUrl = data.results[i].sourceUrl;
// var recipeImage = data.results[i].image;

  export default search;