import React from 'react';
import img from "../../Assets/img.png"
import logo from "../../Assets/logo.png"
import "./HomeAbout.scss"

const Index = () => {
    return (
        <div>
            <div className={"HomeAboutSection"}>
                <div className="container">
                    <div className="HomeAboutSectionBlock">
                        <div className="row">
                            <div className="col-lg-8 gap-4">
                                <div className="HomeAboutSectionBlockTitle">
                                    <h1>
                                        Lorem ipsum <span>dolor sit amet, consectetur adipiscing elit.</span> Lacus, purus pulvinar elit tellus massa erat turpis congue.
                                    </h1>
                                    <div className={"HomeAboutSectionBlockTitle_desc"}>
                                        <div className="HomeAboutSectionBlockTitle_desc_line"/>
                                        <p>
                                            Ut enim ad minima v quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 gap-4">
                                <div className="HomeAboutSectionBlockImg">
                                    <img src={logo} className={"ImgLogo"} alt=""/>
                                    <img src={img} className={"HomeAboutSectionBlockImg_img"} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"HomeAboutSection2"}>
                <div className="container">
                    <div className="HomeAboutSection2Block">
                        <div className="row">
                            <div className="col-lg-8 gap-4">
                                <div className="HomeAboutSection2BlockBox">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-6">
                                            <div className="HomeAboutSection2BlockBoxCard">
                                                <h2>2000</h2>
                                                <p>Ut enim ad minima </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-6">
                                            <div className="HomeAboutSection2BlockBoxCard">
                                                <h2>547</h2>
                                                <p>Smodi tempora incidunt </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-6">
                                            <div className="HomeAboutSection2BlockBoxCard">
                                                <h2>1 474</h2>
                                                <p>Qia non numquam eius </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-6">
                                            <div className="HomeAboutSection2BlockBoxCard">
                                                <h2>1</h2>
                                                <p>Abore et dolore agnam</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button>
                                        ПОДРОБНЕЕ О КОМПАНИИ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Index;