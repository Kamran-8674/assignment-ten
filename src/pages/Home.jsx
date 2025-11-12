import React from 'react';
import FeaturedReview from '../components/FeaturedReview';
import HeroSection from '../components/HeroSection';
import TopLocalChefs from '../components/TopLocalChefs';
import PopularCuisines from '../components/PopularCuisines';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeaturedReview></FeaturedReview>
            <TopLocalChefs></TopLocalChefs>
            <PopularCuisines></PopularCuisines>
            
            
        </div>
    );
};

export default Home;