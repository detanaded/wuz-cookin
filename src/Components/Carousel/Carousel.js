import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components'
import './Carousel.css'
import {device} from '../MediaQueries'



class DemoCarousel extends Component {
    render() {
        return (
          <div>
            <Carousel interval={4000} autoPlay showArrows infiniteLoop showStatus={false} showThumbs={false}>
                <div>
                    {/* <div style={{height: '100vh', width: '100%', backgroundImage: `url('../../Assets/CookTable.jpg')`, backgroundSize: 'cover'}} className='imagetest'></div> */}
                    <Images alt='Cook table' src= {require('../../Assets/CookTable.jpg')}/>
                    <Centered> <H1>Discover</H1>
                        <div className='slidingVertical'>
                            <Span>recipes</Span>
                        </div>
                    </Centered>
                    
                </div>
                <div>
                    <Images alt='Sandwich Dish' src= {require('../../Assets/VegetableTable.jpg')} />
                    <Centered> 
                        <H1>Discover</H1>
                        <div className='foods1'>
                            <Span>foods</Span>
                        </div>
                    </Centered>
                </div>
                <div>
                    <Images alt='Hamburger Dish' src={require('../../Assets/Hamburger.jpg')}/>
                    <Centered>
                        <H1>Discover</H1>
                        <div className='foods2'>
                            <Span>tips</Span>
                        </div>
                        </Centered>
                </div>
                <div>
                    <Images alt='Pasta Dish' src={require('../../Assets/PastaDish.jpg')}/>
                    <Centered> <H1>Discover</H1>
                        <div className='foods3'>
                            <Span>favorites</Span>
                        </div>
                    </Centered>
                </div>
                <div>
                    <Images alt='Roasted Chicken' src={require('../../Assets/ChickenParsley.jpg')}/>
                    <Centered>
                        <H1>Discover</H1>
                        <div className="foods4">
                            <Span>solutions</Span>
                        </div>
                        </Centered>
                </div>
            </Carousel>
            </div>
        );
    }
};
 
export default DemoCarousel




const Centered = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform:translate( -50%, -50%)
`

const H1 = styled.h1`
color: #fff
font-size: 4.5em;
font-family: 'Sawarabi Gothic', 'Roboto', sans-serif;
line-height: 1;
font-weight: bold;
letter-space: .0125em;
text-align: center; 
text-transform: uppercase;
@media ${device.mobileS}{
    font-size: 2.5em;
    font-weight: bold;
    letter-space: .0125em;
},
@media ${device.mobileM}{
    font-size: 1em;
    font-weight: bold;
    letter-space: .0125em;
}

`

const Span = styled.span`
font-size: 3.0em;
font-family: 'Sawarabi Gothic', 'Roboto', sans-serif; 
line-height: 1;
font-weight: bold;
letter-space: .0125em;
text-align:center;
text-transform: uppercase;
@media ${device.mobileS}{
    font-size:1.5em;
    font-weight: bold;
    letter-space: .0125em;
}
`
 const Images = styled.img`
 @media ${device.mobileM}{
     height: 50px
 }
 `