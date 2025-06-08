import React from 'react';
import Banner from './Banner';
import FeaturedFood from './FeaturedFood';
import { useLoaderData } from 'react-router';
import OurMission from '../sharedPages/ourMission/OurMission';

const Home = () => {
    const foods = useLoaderData();
    
    return (
        <div>
            <title>Home</title>
            <Banner></Banner>
            <FeaturedFood foods={foods}></FeaturedFood>
            <OurMission></OurMission>
        </div>
    );
};

export default Home;