import React from 'react';
import img1 from "../../Assets/About/img.png"
import img2 from "../../Assets/About/img_1.png"
import img3 from "../../Assets/About/img_2.png"
import img4 from "../../Assets/About/img_3.png"
import "./AboutServices.scss"

const Index = () => {
    return (
        <div className={"AboutServicesSection"}>
            <div className="container">
                <div className="AboutServicesSectionBlock">
                    <h1>Наши услуги</h1>
                    <div className="row">
                        <div className="col-lg-3 col-md-6  gap-4">
                            <div className="AboutServicesSectionBlock_card">
                                <div className="AboutServicesSectionBlock_card_img">
                                    <img src={img1} alt=""/>
                                </div>
                                <h3>Разработка сайтов</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6  gap-4">
                            <div className="AboutServicesSectionBlock_card">
                                <div className="AboutServicesSectionBlock_card_img">
                                    <img src={img2} alt=""/>
                                </div>
                                <h3>Продвижение в соц сетях</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6  gap-4">
                            <div className="AboutServicesSectionBlock_card">
                                <div className="AboutServicesSectionBlock_card_img">
                                    <img src={img3} alt=""/>
                                </div>
                                <h3>Маркетинговый план</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 gap-4">
                            <div className="AboutServicesSectionBlock_card">
                                <div className="AboutServicesSectionBlock_card_img">
                                    <img src={img4} alt=""/>
                                </div>
                                <h3>Дизайн </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;