import React, { Component } from "react";
import Axios from "axios";
import {connect} from 'react-redux'

class RecipeDisplay extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }
  getRecipes = () => {
    Axios.get(`/api/recipes?user_id=${this.props.user_id}`).then(res => {
      
      this.setState({
        recipes: res.data
      })
    })
    .catch(e =>{
      console.log(e)
    });
  }
  componentWillMount(){
    this.getRecipes()
    
  }
  inputRecipe = e => {
    console.log('here')
    e.preventDefault();
    const { recipe_id, name, image, directions, ingredients } = e.target;
    console.log(this.state)
    Axios.put("/api/update", {
      name: name.value,
      image: image.value,
      directions: directions.value,
      ingredients: ingredients.value,
      recipe_id: recipe_id.value
    })
      .then(res => {
        console.log(res)
        // this.props.addNewRecipe(res.data[0]);
        // this.props.history.push("/display");
      })
      .catch(err => {
        console.log(err);
      });
  };
 deleteRecipe = (i,e) => {
   e.preventDefault()
   Axios.delete(`/api/recipes?recipe_id=${this.state.recipes[i].recipe_id}`)
   .then(res => {
    this.getRecipes()
   })
   .catch(err => {
    console.log(err);
  });
 }
    
  render() {
    // this.state.recipes=this.state.recipes|| []
    return this.state.recipes.map((recipe,i) => {
      return ( <div key={i}>
        
      <form onSubmit={this.inputRecipe}>
        <input readOnly type='hidden' name='recipe_id' value={recipe.recipe_id}></input>
        <input readOnly type='hidden' name='index' value={i}></input>
          <input
            type="text"
            name="name"
            defaultValue={recipe.name}
            onChange={this.recipeUpdate}
          />
          <input
          type='text'
            name="image"
            defaultValue={recipe.image}
            onChange={this.recipeUpdate}/>

          <input type='text'name="ingredients" defaultValue={recipe.ingredients} onChange={this.recipeUpdate}/>
         
          <input
            type='text'
            name="directions"
            defaultValue={recipe.directions}
            onChange={this.recipeUpdate}/>
          <button type="delete" value="Delete" onClick={(e)=>this.deleteRecipe(i,e)}>
            Delete
          </button>
          <button type='submit'>Update Recipe</button>
        </form>
      </div>);
    })
  
  }
}

function mapStateToProps(reduxState) {
  console.log(reduxState)
  return {
    user_id: reduxState.user_id
  };
}

export default connect(mapStateToProps)(RecipeDisplay);
