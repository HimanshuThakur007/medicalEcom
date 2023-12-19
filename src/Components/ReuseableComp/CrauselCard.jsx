import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Sw from '../../../public/Swadeshiayurved.jpg'

const CrauselCard = () => {
    
        const carouselStyle = {
            height: '400px', // Set your desired height here
            // You can also set other styles like maxWidth, margin, etc. if needed
        };
    return (
        <div style={{}}>
        <Carousel showArrows={false}>
            <div>
                <img src={Sw} alt="Slide 1" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/2.jpeg" alt="Slide 2" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" alt="Slide 3" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        </div>
    );
};

export default CrauselCard;
