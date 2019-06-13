import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
// import {Link} from 'react-router-dom'
import { device } from "../MediaQueries";

export default class Recipe extends Component {
  constructor() {
    super();
    // Creating a variable to store recipes in.
    this.state = {
      recipes: [],
      userInput: ""
    };
  }
  componentDidMount() {
    // Getting the recipes from the API
    axios
      .get("/recipe")
      // .then retruns a promise
      .then(res => {
        console.log(res.data);
        // stores date in recipes
        this.setState({
          recipes: res.data.recipes
        });
      });
  }

  handleInputChange = e => {
    this.setState({ userInput: e.target.value });
  };

  handleKeyPress = e => {
    if(e.which === 13){
      this.handleButtonClick()
    }
  }


  handleButtonClick = () => {
    const key = "4c25a65684c9788bf0e8558fc8fda4dd";
    const url = `https://www.food2fork.com/api/search?key=${key}&q=${
      this.state.userInput
    }&page=1`;

    axios.get(url).then(response => this.setState({ recipes: response.data.recipes }));
  };

  render() {
    // maps over the recipe array stored on state and returns jsx
    const recipeDisplay = this.state.recipes.map((recipe, i) => {
      return (
        // Displays recipe title.
        <div key={i}>
          <h1>{recipe.title}</h1>
          <img src={recipe.image_url} alt="" />
          <a href={recipe.source_url}>
            <button>View Recipe</button>
          </a>
        </div>
      );
    });

    return (
      <div>
        <input onChange={this.handleInputChange} onKeyPress={this.handleKeyPress}/>
        <button onClick={this.handleButtonClick}>Submit</button>
        {recipeDisplay}
      </div>
    );
  }
}
