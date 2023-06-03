import React from 'react';

//In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
export default function RecipeList(props) {
    console.log(props)
//   const objectValues = Object.values(props.results)
//   const objectArray = Array.from(objectValues)
//   console.log(objectArray)
  return (
    <ul className="list-group"> Recipe List
       {/* {objectArray.map((result) => { 
        return (
          <li className="list-group-item"
            key={result.id}>

            <a target='_blank' href={result.sourceUrl}>
              
            </a>
          </li>
        )})} */}

    </ul>
  );
}