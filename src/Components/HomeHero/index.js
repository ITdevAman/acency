import React from 'react';
import HeroImg from "../../Assets/Rectangle 3.png"
import img1 from  "../../Assets/IconsHero/1.png"
import img2 from  "../../Assets/IconsHero/2.png"
import img3 from  "../../Assets/IconsHero/3.png"
import "./HomeHero.scss"



const Index = () => {
    return (
        <div className={"HeroSection"}>
            <div className={"heroImg"}><img src={HeroImg}  alt=""/></div>
            <div className="container">
                <div className={"heroBlock"}>
                    <div className={"heroBlock"}>
                        <h1>Dictumst habitasse velit posuere tincidunt vivamus</h1>
                        <p>Quam arcu tristique odio vulputate urna isus turpis tempor diam semper tristique massa eget suspendisse aenean. Neque turpis in pretium, odio habitant a laoreet. In massa sit pharetra, netus montes.</p>
                        <button>заказать проект</button>
                    </div>
                </div>
                <div className={"heroBlockCard"}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 gap-4">
                            <div className="heroBlockCardBLock">
                                <div className={"heroBlockCardBLockBox"}>
                                    <h1>+85</h1>
                                    <img src={img1} alt=""/>
                                </div>
                                <p>Enim sit nibh euismod sed ultrices in. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6  gap-4">
                            <div className="heroBlockCardBLock">
                                <div className={"heroBlockCardBLockBox"}>
                                    <h1>2011</h1>
                                    <img src={img2} alt=""/>
                                </div>
                                <p>Enim sit nibh euismod sed ultrices in. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 gap-4">
                            <div className="heroBlockCardBLock">
                                <div className={"heroBlockCardBLockBox"}>
                                    <h1>12</h1>
                                    <img src={img3} alt=""/>
                                </div>
                                <p>Enim sit nibh euismod sed ultrices in. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;