import React, { Component } from "react";
import axios from "axios";
import { Images, Container, S1, Box, Favorite, View, Submit, Search } from "./DashboardStyle";

const { REACT_APP_KEY } = process.env;

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
    console.log(process.env);
    axios
      .get("/recipe")
      // .then returns a promise
      .then(res => {
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
    if (e.which === 13) {
      this.handleButtonClick();
    }
  };

  handleButtonClick = () => {
    const url = `https://www.food2fork.com/api/search?key=${REACT_APP_KEY}&q=${
      this.state.userInput
    }&page=1`;

    axios
      .get(url)
      .then(response => this.setState({ recipes: response.data.recipes }));
  };

  addTofavorites = recipe => {
    axios.post("/favorites/add", { recipe }).then(response => {
      console.log(response.data);
    });
  };

  render() {
    // maps over the recipe array stored on state and returns jsx
    const recipeDisplay = this.state.recipes.map((recipe, i) => {
      return (
        // Displays recipe title.
        <Container key={i}>
          <Box>
          <S1>{recipe.title}</S1>
          <Images src={recipe.image_url} alt="" />
          <a href={recipe.source_url}>
            <View>View Recipe</View>
          </a>
          <Favorite onClick={() => this.addTofavorites(recipe)}>Favorite</Favorite>
          </Box>
        </Container>
      );
    });

    return (
      <div>
        <Search
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          placeholder="Search Recipes"
        />
        <Submit onClick={this.handleButtonClick}>Submit</Submit>

        {recipeDisplay}
      </div>
    );
  }
}
