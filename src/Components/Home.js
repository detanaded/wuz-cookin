import React, { Component } from 'react'
import Carousel from './Carousel'



export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <button onClick={this.props.history.push('/recipesearch')}>Recipe</button> */}
        <Carousel/>
        
        
        
      </div>
    )
  }
}

