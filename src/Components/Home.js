import React, { Component } from 'react'
import Carousel from './Carousel/Carousel'
import styled from 'styled-components'
import {device} from './MediaQueries'
import './Home/Home.css'





export default class Home extends Component {
  render() {
    return (
      <div className='main'>
        <Carousel/>
        <Body>
          <H3>wuz cookin experience!</H3>
          <H1>wuz cookin recipe search site</H1>
          <Para>Search thousands of recipes based on Food2Fork API! Wuz Cookin has any recipe you can think of to get you started cooking!</Para>
          <Button>Join Now!</Button>
          <H2>find the perfect recipe</H2>
        </Body>
        <Style></Style>
        <Body2>
          <div>
            <Titlespan>add your favorites</Titlespan>
            <Tp>Use the favorite button to add and recipes to your profile!</Tp>
          </div>
          <div><Titlespan>inspire yourself</Titlespan>
            <Tp>Don't know where to start? Sign up and start searching for that one recipe</Tp>
          </div>
          <div>
            <Titlespan>search 1m+ recipes</Titlespan>
            <Tp>Search over 1 million recipes based on any keyword used</Tp>
          </div>
        </Body2>
        <Body3>
        <H12>Cook</H12>
        <GreyP>5-ingredient cheesecake</GreyP>
        <LightP>preheating 125 &deg;F </LightP>
          <video className="cooking-video" type="video/mp4" src={require(`../Assets/step-by-step.mp4`)} autoPlay={true} loop={true} playsInline=""></video>
          <GreyP>step 2 of 8</GreyP>
          <Tp>Add the sour cream and vanillia extract to the bowl. Continue to beat on medium-high speed for 1-2 minutes to fully incorporate the sour cream.</Tp>
        </Body3>
      </div>
      
    )
  }
}

const Body = styled.div` 
margin: 0;
display: flex;
align-items: center; 
flex-direction: column
text-align: center;
@media${device.mobileS}{
height: 400px;
width: 100%;
}
`


const Button = styled.button`
@media ${device.mobileS}{
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
    background-color: purple;
    color: black;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
}`

const H1 = styled.h1`
@media ${device.mobileS}{
text-transform: capitalize;
font-weight: bold;
margin: 5px 0 0;
}`

const Para = styled.p`
@media ${device.mobileS}{
font-size: 1.2em;}
`

const H2 = styled.h2`
@media ${device.mobileS}{
text-transform: uppercase;
font-weight: bold;
}
`

const H3 = styled.span`
@media ${device.mobileS}{
text-transform: uppercase
margin: 10px 0 0;
opacity: 0.5
}
`

const Body2 = styled.div`
@media ${device.mobileS}{
height: 300px;
width: 100%;
// background-color: aqua;
display:flex;
align-items: center;
flex-direction: column;
text-align: center;
}
`

const Titlespan = styled.span`
@media ${device.mobileS}{
text-transform: uppercase;
color: #4a4a4a;
font-weight: 700;
}
`


const Tp = styled.p`

`

const Style = styled.style`
@media ${device.mobileS}{
border-left: 6px solid green;
  height: 500px;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
}
`

const Body3 = styled.div`
@media ${device.mobileS}
display: flex;
align-items: center; 
flex-direction: column
text-align: center;
height: 350px;
width: 100%;
`

const H12 = styled.h1`
margin:0`

const GreyP = styled.h2`
margin: 0;
font-size: 1em;
text-transform: uppercase;
`

const LightP = styled.p`
color: #4a4a4a;
font-weight: 700;
margin: 0;
text-transform: capitalize;
`




