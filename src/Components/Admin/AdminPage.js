import React, { Component } from 'react'
import {connect} from 'react-redux'
import Axios from 'axios';

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
        <div key={i}>
          <h4>{recipes.username}</h4>
          <p>{recipes.name}{recipes.image}</p>
        </div>
      )
    })
   
  }
}

export default connect()(AdminPage)