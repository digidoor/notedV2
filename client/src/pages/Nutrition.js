import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUERY_RECIPES } from "../utils/queries"
import { useMutation } from '@apollo/client';
import { search } from '../components/RecipeList';
import SearchResultContainer from '../components/SearchResultContainer';

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
    width: '500px',
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
    width: '40%',
    backgroundColor: '#bbe8d9',
    color: 'black',
    width: '30%',
    fontWeight: 'bold',
    boxShadow: '2px 2px 0px darkgrey', 
  },

  clearBtn: {
    width: '40%',
    marginLeft: '15px',
    backgroundColor: '#bbe8d9',
    color: 'black',
    fontWeight: 'bold',
    boxShadow: '2px 2px 0px darkgrey', 
  },
  mealPBar: {
    height: '35px',
  }

}

export default function Nutrition() {
// TODO: Create useState variable called query and setQuery that is equal to the input value of the search
  return (
    <div className="container text-center" style={styles.nutContainer}>
      <div className="column-left" style={styles.columnLeft}>
        <div className="card-one recipeUrl" id="recipe" style={styles.cardOne}>
          <h4>Recipes</h4>
          <div style={styles.recipeInputs}>
            <input id="userSearch" type="search" placeholder="Search Recipe" style={styles.searchBar}></input>
            <button className="btn" id="fetch-button" style={styles.searchBtn}><i class="large material-icons">search</i></button>
          </div>
          <div>
      {/* Pass our results to the ResultsList component to map over */}

      // TODO: Only render this component if the query variable is truthy
      <SearchResultContainer ? query={query}/>
    </div>
        </div>
      </div>

      <div className="row">
        <div className="column-right" id="mealPlan" style={styles.columnRight}>
          <div className="card-two" style={styles.cardTwo}>
            <h4>Meal Plan</h4>
            <input className="add" id="addRecipe" type="text" placeholder="+ your recipe URL here" style={styles.mealPBar}></input>
            <div style={styles.mealPlanBtns}>
              <button className="add btn " id="add" style={styles.addBtn}>Add</button>
              <button className="btn " id="clear-button" style={styles.clearBtn}>Clear</button>
            </div>
            <ul id="savedList"></ul>

          </div>
        </div>
      </div>
    </div>
  )
}