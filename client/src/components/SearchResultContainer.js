import { useState, useEffect } from 'react';
import RecipeList from './RecipeList';

// Import our search method
import search from '../utils/nutritionApi';

const SearchResultContainer = (props) => {

  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
 

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over */}
      {props.query ? <RecipeList results={props.query} /> : null}
    </div>
  );
};

export default SearchResultContainer;