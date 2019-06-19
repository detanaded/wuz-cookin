import React, { Component } from 'react'
import {connect} from 'react-redux'
import Axios from 'axios';
import {Images, Container, Title, Desc, Body} from './AdminStyle'
import './Style.css'

class AdminPage extends Component {
  constructor(){
    super()
    this.state={
      userRecipes: []
    }
  }
  componentWillMount(){
    Axios.get('/api/recipes/admin').then(res => {
      this.setState({
        userRecipes: res.data
      })
    })

  .catch(e => console.log(e))
  }
  render() {
    return this.state.userRecipes.map( (recipes, i) =>{
      return (
        <Body>
        <Container key={i}>
          <Title>{recipes.username}</Title>
          <Desc>{recipes.name}</Desc>
          <img alt="Recipe" width='90%'height='60%'  src={recipes.image}/>
        </Container>
        </Body>
      )
    })
   
  }
}

export default connect()(AdminPage)