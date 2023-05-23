import React from "react";

export default function Nutrition() {

    return (
        <div class="container text-center">
    <div class="column-left">
      <div class="card-one recipeUrl" id="recipe">
        <h4>Recipes</h4>
        <input id="userSearch" type="search" placeholder="Search Recipe"></input>
        <button class="btn btn-danger" id="fetch-button">Search</button>
        <div id="results"></div>
      </div>
    </div>

    <div class="row">
      <div class="column-right" id="mealPlan">
        <div class="card-two">
          <h4>Meal plan</h4>
          <input class="add" id="addRecipe" type="text" placeholder="+ your recipe URL here"></input>
          <button class="add btn btn-danger" id="add">Add</button>

          <ul id="savedList"></ul>
          <button class="btn btn-danger" id="clear-button">clear</button>

        </div>
      </div>
    </div>
  </div>
    )
}