import React from 'react';
import logo from "../../../Assets/logo.png"
import {Link} from "react-router-dom";
import inst from "../../../Assets/Footer/socials.png"
import face from "../../../Assets/Footer/socials (1).png"
import what from "../../../Assets/Footer/socials (2).png"
import tele from "../../../Assets/Footer/socials (3).png"
import inst1 from "../../../Assets/Footer/socials (4).png"
import face1 from "../../../Assets/Footer/socials (5).png"
import what1 from "../../../Assets/Footer/socials (6).png"
import tele1 from "../../../Assets/Footer/socials (7).png"
import {NavLink} from "react-bootstrap";
import {useIntl} from "react-intl";
import "./footer.scss"

const Footer = () => {
    const {formatMessage} = useIntl()
    return (
        <div className={"FooterSection"}>
            <div className="container">
                <div className="FooterSectionBl">
                    <div className="FooterSectionBlock">
                        <div className="FooterSectionBlock_logo">
                            <img src={logo} alt=""/>
                            <NavLink href={"mailto:info@agency.kg"}>info@agency.kg</NavLink>
                        </div>
                        <div className="FooterSectionBlock_menu">
                            <Link to={"/about"}  className={"HeaderLink"}>{formatMessage({id : "about"})}</Link>
                            <Link to={"/project"}  className={"HeaderLink"}>{formatMessage({id :"project"})}</Link>
                            <Link to={"/contact"} className={"HeaderLink"}>{formatMessage({ id : "contact"})}</Link>
                        </div>
                        <div className="FooterSectionBlock_seti">
                            <div className={"FooterSectionBlock_seti_icon"}>
                                <NavLink className={"FooterSectionBlock_seti_icon_img1"} href={"https://www.instagram.com/"}><img className={""} src={inst1} alt=""/></NavLink>
                                <img className={"FooterSectionBlock_seti_icon_img"} src={inst} alt=""/>
                            </div>
                            <div className={"FooterSectionBlock_seti_icon"}>
                                <NavLink href={"https://www.facebook.com/"} className={"FooterSectionBlock_seti_icon_img1"}><img className={"dd"} src={face1} alt=""/></NavLink>
                                <img className={"FooterSectionBlock_seti_icon_img"} src={face} alt=""/>
                            </div>
                            <div className={"FooterSectionBlock_seti_icon"}>
                                <NavLink href={"https://telegram.org/"} className={"FooterSectionBlock_seti_icon_img1"}><img className={"sc"} src={tele1} alt=""/></NavLink>
                                <img className={"FooterSectionBlock_seti_icon_img"} src={tele} alt=""/>
                            </div>
                            <div className={"FooterSectionBlock_seti_icon"}>
                                <NavLink href={"https://www.whatsapp.com/?lang=ru"} className={"FooterSectionBlock_seti_icon_img1"}><img className={"dsc"} src={what1} alt=""/></NavLink>
                                <img className={"FooterSectionBlock_seti_icon_img"} src={what} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={"FooterSectionBlox"}>
                        <h4>Copyright 2022 - AGENCY</h4>
                        <h5>Политика конфиденциальности</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;