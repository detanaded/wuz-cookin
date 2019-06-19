import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import AdminPage from '../Admin/AdminPage'
import {Inputs, Form, Button1} from './AddStyle'

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
        <Form onSubmit={this.inputRecipe}>
          <Inputs
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.recipeUpdate}
          />
          <Inputs
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={this.recipeUpdate}
          />

          <Inputs
            type="text"
            name="ingredients"
            placeholder="Ingredients"
            onChange={this.recipeUpdate}
          />

          <Inputs
            type="text"
            name="directions"
            placeholder="Directions"
            onChange={this.recipeUpdate}
          />
          <Button1 type="reset" value="Reset" onClick={this.cancelRecipe}>
            Cancel
          </Button1>
          <Button1 type="submit">Add Recipe</Button1>
        </Form>
        <div><AdminPage/></div>
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
