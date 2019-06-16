import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'
import { Images, Centered, H1, Span} from './CarouselStyle'



class DemoCarousel extends Component {
    render() {
        return (
          <div>
            <Carousel interval={4000} autoPlay showArrows infiniteLoop showStatus={false} showThumbs={false} dynamicHeight={true}>
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