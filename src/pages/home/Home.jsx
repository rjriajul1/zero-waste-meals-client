import React from 'react';
import Banner from './Banner';
import FeaturedFood from './FeaturedFood';
import { useLoaderData } from 'react-router';
import OurMission from '../sharedPages/ourMission/OurMission';
import Volunteer from './volunteer/Volunteer';
import BlogSection from './blogSection/BlogSection';
import OfferSection from './offerSection/OfferSection';


const Home = () => {
    const foods = useLoaderData();
    
    return (
        <div>
            <title>Home</title>
            <Banner></Banner>
            <FeaturedFood foods={foods}></FeaturedFood>
            <OurMission></OurMission>
            <Volunteer></Volunteer>
            <BlogSection></BlogSection>
            <OfferSection></OfferSection>

        </div>
    );
};

export default Home;