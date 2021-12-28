import React from 'react';
import LandingSection from '../../LandingSection';
import {homeObject1, homeObject2, homeObject3} from './Data';

function Home() {
    return (
        <>
            <LandingSection {...homeObject1} />
            <LandingSection {...homeObject2} />
            <LandingSection {...homeObject3} />
        </>
    );
}

export default Home
