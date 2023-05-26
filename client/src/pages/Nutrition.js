import React from "react";

export default function Nutrition() {

    return (
        <div className="container text-center">
    <div className="column-left">
      <div className="card-one recipeUrl" id="recipe">
        <h4>Recipes</h4>
        <input id="userSearch" type="search" placeholder="Search Recipe"></input>
        <button className="btn btn-danger" id="fetch-button">Search</button>
        <div id="results"></div>
      </div>
    </div>

    <div className="row">
      <div className="column-right" id="mealPlan">
        <div className="card-two">
          <h4>Meal plan</h4>
          <input className="add" id="addRecipe" type="text" placeholder="+ your recipe URL here"></input>
          <button className="add btn btn-danger" id="add">Add</button>

          <ul id="savedList"></ul>
          <button className="btn btn-danger" id="clear-button">clear</button>

        </div>
      </div>
    </div>
  </div>
    )
}