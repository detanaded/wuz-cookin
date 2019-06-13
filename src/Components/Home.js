import React, { Component } from 'react'
import Carousel from './Carousel/Carousel'




export default class Home extends Component {
  render() {
    return (
      <div className='main'>
        {/* <button onClick={this.props.history.push('/recipesearch')}>Recipe</button> */}
        <Carousel/>
      </div>
    )
  }
}

