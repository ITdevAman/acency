import React from 'react';
import imgFon from "../../Assets/img_1.png"
import "./DiscussProject.scss"
const Index = () => {
    return (
        <div className={"DiscussProjectSection"}>
            <div className="container">
                <div className="DiscussProjectSectionBlock">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="DiscussProjectSectionBlock_block">
                                <h1>
                                    обсудим ваш проект
                                </h1>
                                <p>
                                    Оставьте заявку и мы свяжемся с вами в ближайшее время и ответим на все вопросы
                                </p>
                                <div className="DiscussProjectSectionBlock_block_inputBlock">
                                    <input placeholder={"Ввеите ваше имя"} type="text" className="DiscussProjectSectionBlock_block_inputBlock_input"/>
                                    <input  placeholder={"Телефон"} type="number" className="DiscussProjectSectionBlock_block_inputBlock_input"/>
                                </div>
                                <div className="DiscussProjectSectionBlock_block_inputBlock">
                                    <input placeholder={"Название компании"} type="text" className="DiscussProjectSectionBlock_block_inputBlock_input"/>
                                    <input placeholder={"E-mail"} type="E-mail" className="DiscussProjectSectionBlock_block_inputBlock_input"/>
                                </div>
                                <button>отправить</button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={"ImgFon"}>
                                <img src={imgFon} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;