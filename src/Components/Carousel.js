import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
          <div>
              
            <Carousel autoPlay showArrows infiniteLoop showStatus={false} dynamicHeight={false}>
                <div>
                    <img alt='Spaghetti Dish' src= {require('../Assets/Spaghetti.jpg')}/>
                </div>
                <div>
                    <img alt='Sandwich Dish' src= {require('../Assets/Sandwich.jpg')} />
                </div>
                <div>
                    <img alt='Hamburger Dish' src={require('../Assets/Hamburger.jpg')}/>
                </div>
                <div>
                    <img alt='Pasta Dish' src={require('../Assets/PastaDish.jpg')}/>
                </div>
                <div>
                    <img alt='Roasted Chicken' src={require('../Assets/Chicken.jpg')}/>
                </div>
            </Carousel>
            </div>
        );
    }
};
 
export default DemoCarousel



