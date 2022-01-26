import React from 'react';
import Article from '../../Article';
import {homeObject1, homeObject2, homeObject3} from '../../../data/homeData';

function Home() {
    return (
        <>
            <Article {...homeObject1} />
            <Article {...homeObject2} />
            <Article {...homeObject3} />
        </>
    );
}

export default Home
