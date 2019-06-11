import React, { Component } from 'react'
// import Modal from './Login/modal'
// import styled from 'styled-components'
import Carousel from './Carousel'
// import styled from 'styled-components'


export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <button onClick={this.props.history.push('/recipesearch')}>Recipe</button> */}
        <Carousel/>
        
        {/* <Modal/> */}
        
      </div>
    )
  }
}

