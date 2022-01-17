import React from 'react';
import Banner from './Banner';
import FooterBanner from './FooterBanner';
import ImageCard from './ImageCard';
import Place from './Place';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Place/>
            <ImageCard/>
            <FooterBanner/>
        </div>
    );
};

export default Home;