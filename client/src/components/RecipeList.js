import React from 'react';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function RecipeList(props) {
  return (
    <ul className="list-group">
      {props.results.map((result) => (
        <li className="list-group-item" key={result.id}>
          <img
            alt={result.title}
            className="img-fluid"
            src={result.images.original.url}
          />
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;