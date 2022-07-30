import React from 'react';
import AboutHero from "../../Components/AboutHero";
import AboutBlock from "../../Components/AboutBlock";
import AboutBlock2 from "../../Components/AboutBlock2";
import AboutServices from "../../Components/AboutServices";
import HomeAbout from "../../Components/HomeAbout";


const Index = () => {
    return (
        <div>
            <AboutHero/>
            <HomeAbout/>
            <AboutBlock/>
            <AboutBlock2/>
            <AboutServices/>
        </div>
    );
};

export default Index;