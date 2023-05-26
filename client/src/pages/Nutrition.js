import React from "react";

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
    border: 'solid',
    borderColor: 'black',
  },

  // meal plan
  cardTwo: {
    flexDirection: 'column',
    display: 'flex',
    float: 'right',
    padding: '25px',
    width: '500px',
    border: 'solid',
    borderColor: 'black',
  },

  nutContainer: {
    marginTop: '30px',
  },

  // Recipe column
  searchBar: {
    width: '80%'
  },

  searchBtn: {
    width: '15%'
  },

  // meal plan column
  addBtn: {
    width: '50%',
  },

  clearBtn: {
    width: '50%',
  }

}

export default function Nutrition() {

  return (
    <div className="container text-center" style={styles.nutContainer}>
      <div className="column-left" style={styles.columnLeft}>
        <div className="card-one recipeUrl" id="recipe" style={styles.cardOne}>
          <h4>Recipes</h4>
          <input id="userSearch" type="search" placeholder="Search Recipe" style={styles.searchBar}></input>
          <button className="btn btn-danger" id="fetch-button" style={styles.searchBtn}>Search</button>
          <div id="results"></div>
        </div>
      </div>

      <div className="row">
        <div className="column-right" id="mealPlan" style={styles.columnRight}>
          <div className="card-two" style={styles.cardTwo}>
            <h4>Meal Plan</h4>
            <input className="add" id="addRecipe" type="text" placeholder="+ your recipe URL here"></input>
            <button className="add btn btn-danger" id="add" style={styles.addBtn}>Add</button>

            <ul id="savedList"></ul>
            <button className="btn btn-danger" id="clear-button" style={styles.clearBtn}>clear</button>

          </div>
        </div>
      </div>
    </div>
  )
}