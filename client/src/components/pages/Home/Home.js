import React from 'react';
import { useParallax } from 'react-scroll-parallax';

import Article from '../../Article';
import {homeObject1, homeObject2, homeObject3} from '../../../data/homeData';

import "./Home.css"

function Home() {
    const { ref } = useParallax({ speed: 10 });

    return (
        <>

        <div className="home__image-container">
            <img ref={ref} className="home__image"src="https://i.ibb.co/tsy7Kvc/house-picture.jpg" alt="Maison d'hôtes à Bernay-Saint-Martin"/>
        </div>
        
            <Article {...homeObject1} />
            <Article {...homeObject2} />
            <Article {...homeObject3} />
        </>
    );
}

export default Home
