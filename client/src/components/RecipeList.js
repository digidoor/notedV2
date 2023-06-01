import React from 'react';

/*


*/ 

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
export default function RecipeList(props) {

  const objectValues = Object.values(props.results)
  const objectArray = Array.from(objectValues)
  console.log(objectArray)
  return (
    <ul className="list-group">
       {objectArray.map((result) => { 
        return (
          <li className="list-group-item"
            key={result.id}
          >
            <p>
            {result.title}
            </p>
            <img
               alt={result.title}
               className="img-fluid"
               src={result.image}
            />
          </li>
        )})}

    </ul>
  );
}