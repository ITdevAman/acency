import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {INTL} from "../../../Redux/Actions";
import logo from "../../../Assets/logo.png"
import {useIntl} from "react-intl"
import ImgVector from "../../../Assets/Vector.png"
import Burger from "../BurgerMenu/burger";
import {router} from "../../../Utils/router"
import "./header.scss"
const Header = () => {
    const dispatch = useDispatch()
    const {mainIntl} = useSelector(store => store)
    const [state  ,setState]= useState({
        input : "",
    })
    const handle = (e) => {
        const newData = { ...state }
        newData[e.target.id] = e.target.value
        setState(newData)
    }
    const {formatMessage} = useIntl()
    return (
        <div className={"HeaderSection"}>
            <div className={"container"}>
                <div className="HeaderSectionBlock">
                    <div className={"HeaderSectionBlockLogo"}>
                        <NavLink to={router.home}><img className={"w-[100%]"} src={logo} alt=""/></NavLink>
                    </div>
                    <div className={"HeaderSectionBlockNavbar"}>
                        <div className={"HeaderSectionBlockNavbarMenu"}>
                            <NavLink to={router.about} className={"HeaderLink"}>{formatMessage({id : "about"})}</NavLink>
                            <NavLink to={router.project} className={"HeaderLink"}>{formatMessage({id :"project"})}</NavLink>
                            <NavLink to={router.contact} className={"HeaderLink"}>{formatMessage({ id : "contact"})}</NavLink>
                        </div>
                        <div className={"SearchHeader"}>
                            <div className={state.input.length > 0 ? "divFalse" : "divTrue"}/>
                            <img src={ImgVector} className={"IngVector"} alt=""/>
                            <input className={"input"}  onChange={(e)=>handle(e)} value={state.input}  id={"input"} type="text"/>
                        </div>
                    </div>
                    <div className={"IntlBtn"}>
                        <h3>ЯЗЫК</h3>
                        <button className={mainIntl === "ru" ? "btnIntlTrue" : "btnIntlFalse"} onClick={() => dispatch({type: INTL, payload: "ru"})}>РУ</button>
                        <button className={mainIntl === "en" ? "btnIntlTrue" : "btnIntlFalse"} onClick={() => dispatch({type: INTL, payload: "en"})}>ENG</button>
                        <button className={mainIntl === "kg" ? "btnIntlTrue" : "btnIntlFalse"} onClick={() => dispatch({type: INTL, payload: "kg"})}>КГ</button>
                    </div>
                    <Burger/>
                </div>
            </div>
        </div>
    );
};

export default Header;