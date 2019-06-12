import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Link} from 'react-router-dom'




export default class RecipeTest extends Component {
  constructor(){
    super()
    // Creating a variable to store recipes in.
    this.state = {
      recipes: []
    }
  }
   componentDidMount(){
    // Getting the recipes from the API
    axios.get('/recipe')
    // .then retruns a promise
    .then(res => {
      console.log(res.data)
      // stores date in recipes
      this.setState({
        recipes: res.data.recipes
      })
    })
  }

  render() {
    // maps over the recipe array stored on state and returns jsx
    const recipeDisplay = this.state.recipes.map((recipe, i) => {
      return(
        // Displays recipe title.
        <RecipeContainer key={i}>
          <h1 >{recipe.title}</h1>
          <img src={recipe.image_url} alt=''/>
          <Link to={recipe.source_url}><button>View Recipe</button></Link>
        </RecipeContainer>
       
      )
    } )
    return (
      <div>
        {recipeDisplay}
        
      </div>
    )
  }
}


// const RecipeImg = styled.div`
// @media(min-width: 320px){
//   width: 100px;
//   height: 100px;
// }
// `


const RecipeContainer = styled.div`
@media(min-width: 320px){
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
}`