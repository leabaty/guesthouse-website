import React from 'react'
import LandingSection from '../../LandingSection'
import {homeObject1} from './Data'

function Home() {
    return (
        <>
            <LandingSection {...homeObject1} />
        </>
    )
}

export default Home
