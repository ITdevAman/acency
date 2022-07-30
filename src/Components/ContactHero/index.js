import React from 'react';
import {NavLink} from "react-bootstrap";
import "./ContactHero.scss"



const Index = () => {
    return (
        <div className={"ContactHeroSection"}>
            <div className="container">
                <div className="ContactHeroSectionBlock">
                    <h1>
                        контакты
                    </h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ContactHeroSectionBlock_box">
                                <p>Телефон</p>
                                <NavLink className={"ContactHeroSectionBlock_box_a"} href={"tel:+996 (559) 18 00 33"}>+996 (559) 18 00 33</NavLink>
                                <NavLink  className={"ContactHeroSectionBlock_box_a"} href={"tel:+996 (559) 18 00 33"}>+996 (559) 18 00 33</NavLink>
                                <NavLink className={"ContactHeroSectionBlock_box_a"}  href={"tel:+996 (559) 18 00 33"}>+996 (559) 18 00 33</NavLink>
                                <button>Заказать звонок</button>
                                <p>E-mail</p>
                                <NavLink className={"ContactHeroSectionBlock_box_link"} href={"mailto:info@agency.kg"}>info@agency.kg</NavLink>
                                <p>Адрес</p>
                                <h4 className={"ContactHeroSectionBlock_box_link"}>г. Бишкек, ул. Советская 152а , БЦ “GRAND”</h4>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ContactHeroSectionBlock_map">
                                <p>Мы на карте</p>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32751.49106194936!2d74.58439340279051!3d42.85806785656222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dcbdacf87b%3A0xfc7d686ab988f348!2z0J_Qu9C-0YnQsNC00Ywg0JDQu9CwLdCi0L7QviDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1656054066516!5m2!1sru!2skg"
                                     allowFullScreen="" loading="lazy" className={"ContactHeroSectionBlock_map_carta"}
                                    referrerPolicy="no-referrer-when-downgrade"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;