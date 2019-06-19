import React, { Component } from 'react'
import {connect} from 'react-redux'
import Axios from 'axios';
import {Images, Container, Title, Desc, Body, DeleteBtn} from './AdminStyle'
import './Style.css'

class AdminPage extends Component {
  constructor(){
    super()
    this.state={
      userRecipes: []
    }
  }
  componentWillMount(){
    this.handleGetRecipes()
  }
  handleGetRecipes = () => {
    Axios.get('/api/recipes/admin').then(res => {
      this.setState({
        userRecipes: res.data
      })
    })
    .catch(e => console.log(e))
  }

  handleDeleteRecipe = (recipe_id) => {
    Axios.delete(`/api/recipes/${recipe_id}`)
    .then(res => {
      this.handleGetRecipes()
    })
  }
  render() {
    return this.state.userRecipes.map( (recipes, i) =>{
      console.log(recipes)
      return (
        <Body key={i}>
        <Container>
          <Title>{recipes.username}</Title>
          <Desc>{recipes.name}</Desc>
          <img alt="Recipe" width='90%'height='60%'  src={recipes.image}/>
          <DeleteBtn onClick={e => this.handleDeleteRecipe(recipes.recipe_id)}>Delete</DeleteBtn>
        </Container>
        </Body>
      )
    })
   
  }
}

export default connect()(AdminPage)