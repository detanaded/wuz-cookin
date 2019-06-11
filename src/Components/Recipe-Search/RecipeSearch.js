import React, { Component } from 'react'

import axios from 'axios'


export default class RecipeTest extends Component {

componentDidMount(){
  axios
  .get('https://cors-anywhere.herokuapp.com/http://www.food2fork.com/api/search?key=095d55718da69da16298efd5a11d8345&q=shredded%20chicken&count=5')
  .then(res => {
    console.log(res.data)
  })
  .catch(error => {
    console.log(error)
  })
}

  render() {
    return (
      <div>
        
        <h1>Recipe Placeholder</h1>
        
      </div>
    )
  }
}
