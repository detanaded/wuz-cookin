import React, { Component } from 'react'
import Carousel from './Carousel/Carousel'
import styled from 'styled-components'
import {device} from './MediaQueries'





export default class Home extends Component {
  render() {
    return (
      <div className='main'>
        <Carousel/>
        <Body>
          <h1>wuz cookin</h1>
          <p>Search thousands of recipes using Food2Fork API! Wuz Cookin has any recipe you can think of to get you started cooking!</p>
          <Button>Join Now!</Button>
          <h1>find the perfect recipe</h1>
        </Body>
      </div>
      
    )
  }
}

const Body = styled.div` 
margin: 0;
background-color: purple;
display: flex;
align-items: center; 
flex-direction: column
text-align: center;
@media${device.mobileS}{
height: 250px;
width: 100vw;
}
`


const Button = styled.button`
border-radius: 3em;
background: #0096D6;
color: white;
font-weight: bold;
height: 40px;
padding: 0 24px;
border: none;
font-size: 14px;
text-align: center;
text-transform: captilize
white-space: nowrap;
:hover {
  background: purple;
  color: black;
}`