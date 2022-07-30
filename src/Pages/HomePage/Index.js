import React from 'react';
import HomeHero from "../../Components/HomeHero";
import HomeAbout from "../../Components/HomeAbout";
import HomeSlider from "../../Components/HomeSlider";
import OurClient from "../../Components/OurClient";
import DiscussProject from "../../Components/DiscussProject";



const Index = () => {
    return (
        <div>
            <HomeHero/>
            <HomeAbout/>
            <HomeSlider/>
            <OurClient/>
            <DiscussProject/>
        </div>
    );
};

export default Index;