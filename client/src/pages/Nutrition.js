import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUERY_RECIPES } from "../utils/queries"
import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../utils/mutations'
import search from '../utils/nutritionApi';
import SavedRecipeList from '../components/SavedRecipeList';
import RecipeList from '../components/RecipeList'

const styles = {
  columnLeft: {
    float: 'left',
  },

  columnRight: {
    float: 'right',
  },

  // recipes
  cardOne: {
    flexDirection: 'column',
    display: 'flex',
    float: 'left',
    padding: '25px',
    width: '780px',
    color: 'black',
    // border: 'solid',
    // borderColor: 'black',
  },

  // meal plan
  cardTwo: {
    flexDirection: 'column',
    display: 'flex',
    float: 'right',
    padding: '25px',
    width: '450px',
    border: 'solid',
    borderColor: 'darkgrey',
    color: 'black',
  },

  nutContainer: {
    marginTop: '30px',
  },

  // Recipe column
  searchBar: {
    width: '80%',
    height: '35px',
  },

  searchBtn: {
    width: '15%',
    marginLeft: '10px',
    backgroundColor: '#bbe8d9',
    color: 'black',
    fontWeight: 'bold',
    boxShadow: '2px 2px 0px darkgrey',
  },

  // meal plan column
  mealPlanBtns: {
    marginTop: '8px',
  },
  addBtn: {
    backgroundColor: '#bbe8d9',
    color: 'black',
    width: '25%',
    fontWeight: 'bold',
    boxShadow: '2px 2px 0px darkgrey',
  },

  clearBtn: {
    width: '25%',
    marginLeft: '15px',
    backgroundColor: '#bbe8d9',
    color: 'black',
    fontWeight: 'bold',
    boxShadow: '2px 2px 0px darkgrey',
  },
  mealPBar: {
    height: '35px',
    width: '90%',
  }

}

export default function Nutrition(props) {
  // Create useState variable called query and setQuery that is equal to the input value of the search
  const [query, setQuery] = useState({});
  const [userSearch, setUserSearch] = useState('')
  const [addRecipe, { error }] = useMutation(ADD_RECIPE)

  // Method to get search query and set state
  const searchRecipe = async () => {
    try {
      const response = await search(userSearch);
      console.log(response)
      setQuery(response.data.results);
    } catch (err) {
      console.log(err)
    }

  };

  const handleUserSearchChange = (e) => {
    setUserSearch(e.currentTarget.value)
  }

  const [chosenRecipe, setChosenRecipe] = useState({ url: '' });

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      console.log(chosenRecipe)
      const { data } = await addRecipe({
        variables: { ...chosenRecipe }
      })
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setChosenRecipe({ ...chosenRecipe, [name]: value })
  }

  return (
    <div className="container text-center" style={styles.nutContainer}>
      <div className="column-left" style={styles.columnLeft}>
        <div className="card-one recipeUrl" id="recipe" style={styles.cardOne}>
          <h4>Recipes</h4>
          <div style={styles.recipeInputs}>
            <input value={userSearch} onChange={handleUserSearchChange} id="userSearch" type="search" placeholder="Search Recipe" style={styles.searchBar}></input>
            <button onClick={searchRecipe} className="btn" id="fetch-button" style={styles.searchBtn}><i className="large material-icons">search</i></button>
          </div>
          <div>
            {/*Only render this component if the query variable is truthy*/}
            {/* Pass our results to the ResultsList component to map over */}
            {query ? <RecipeList results={query} /> : null}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column-right" id="mealPlan" style={styles.columnRight}>
          <div className="card-two" style={styles.cardTwo}>
            <h4>Meal Plan</h4>
            <form onSubmit={handleFormSubmit}>
              <input name='url' value={chosenRecipe.url} onChange={handleChange} className="add" id="addRecipe" type="text" placeholder="+ your recipe URL here" style={styles.mealPBar}></input>
              <div style={styles.mealPlanBtns}>
                <button type='submit' className="add btn " id="add" style={styles.addBtn}>Add</button>
                <button onClick={(e) => {
                  e.preventDefault()
                  setChosenRecipe({ url: "" })
                }} className="btn " id="clear-button" style={styles.clearBtn}>Clear</button>
              </div>
            </form>
            <div>
              {<SavedRecipeList />}
            </div>
            {/* Drawer component. has a error that im trying to figure out to make it work. */}
            {/* <div>
              {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {<SavedRecipeList />}
                  </Drawer>
                </React.Fragment>
              ))}
            </div> */}

          </div>
        </div>
      </div>
    </div>
  )
}