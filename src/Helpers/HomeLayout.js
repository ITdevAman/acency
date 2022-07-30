

import React from 'react';
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";

const HomeLayout = ({children , ...props}) => {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default HomeLayout;