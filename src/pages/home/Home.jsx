import React from 'react';
import Banner from './Banner';
import FeaturedFood from './FeaturedFood';
import { useLoaderData } from 'react-router';

const Home = () => {
    const foods = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <FeaturedFood foods={foods}></FeaturedFood>
        </div>
    );
};

export default Home;