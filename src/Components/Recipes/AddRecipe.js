import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";

class RecipeDisplay extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      image: "",
      directions: "",
      ingredients: ""
    };
  }
  inputRecipe = e => {
    console.log('here')
    e.preventDefault();
    const { name, image, directions, ingredients } = this.state;
  
    console.log(this.state)
    Axios.post("/api/addrecipe", {
      name,
      image,
      directions,
      ingredients,
    })
      .then(res => {
        console.log(res)
        // this.props.addNewRecipe(res.data[0]);
        // this.props.history.push("/display");
      })
      .catch(err => {
        console.log(err);
      });
    e.target.name.value = "";
    e.target.image.value = "";
    e.target.directions.value = "";
    e.target.ingredients.value = "";
  };

  recipeUpdate = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  cancelRecipe = e => {
    e.target.name.value = "";
    e.target.image.value = "";
    e.target.directions.value = "";
    e.target.ingredients.value = "";
  };

  render() {
    return (
      <div>
        <h1>Add Recipe</h1>
        <form onSubmit={this.inputRecipe}>
          <input
            type="text"
            name="name"
            placeholder="Recipe Name"
            onChange={this.recipeUpdate}
          />
          <input
            type="text"
            name="image"
            placeholder="Add Image URL"
            onChange={this.recipeUpdate}
          />

          <input
            type="text"
            name="ingredients"
            placeholder="Add Ingredients"
            onChange={this.recipeUpdate}
          />

          <input
            type="text"
            name="directions"
            placeholder="Add Directions"
            onChange={this.recipeUpdate}
          />
          <button type="reset" value="Reset" onClick={this.cancelRecipe}>
            Cancel
          </button>
          <button type="submit">Add Recipe</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user_id
  };
}

export default connect(mapStateToProps)(RecipeDisplay);
