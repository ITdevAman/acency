import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useIntl} from "react-intl";
import {NavLink} from "react-router-dom";
import logo from "../../../Assets/logo.png";
import ImgVector from "../../../Assets/Vector.png";
import {INTL} from "../../../Redux/Actions";

const Index = () => {
    const {mainIntl} = useSelector(store => store)
    const [state  ,setState]= useState({
        input : "",
    })
    const dispatch = useDispatch()
    const handle = (e) => {
        const newData = { ...state }
        newData[e.target.id] = e.target.value
        setState(newData)
    }
    const {formatMessage} = useIntl()
    return (
        <div className={"BurgerSection"}>
            <div className={"BurgerSectionBlockLogo"}>
                <NavLink to={"/"}><img className={"w-[90%]"} src={logo} alt=""/></NavLink>
            </div>
            <div className={"BurgerSectionBlockNavbar"}>
                <div className={"BurgerSectionBlockNavbarMenu"}>
                    <NavLink to={"/about"}  className={"HeaderLink"}>{formatMessage({id : "about"})}</NavLink>
                    <NavLink to={"/project"}  className={"HeaderLink"}>{formatMessage({id :"project"})}</NavLink>
                    <NavLink to={"/contact"} className={"HeaderLink"}>{formatMessage({ id : "contact"})}</NavLink>
                </div>
            </div>
            <div className={"IntlBtnBurger"}>
                <h3>ЯЗЫК</h3>
                <button className={mainIntl === "ru" ? "IntlBtnBurgerTrue" : "IntlBtnBurgerFalse"} onClick={() => dispatch({type: INTL, payload: "ru"})}>РУ</button>
                <button className={mainIntl === "en" ? "IntlBtnBurgerTrue" : "IntlBtnBurgerFalse"} onClick={() => dispatch({type: INTL, payload: "en"})}>ENG</button>
                <button className={mainIntl === "kyr" ? "IntlBtnBurgerTrue" : "IntlBtnBurgerFalse"} onClick={() => dispatch({type: INTL, payload: "kyr"})}>КГ</button>
            </div>
            <div className={"SearchHeader"}>
                <div className={state.input.length > 0 ? "divFalse" : "divTrue"}/>
                <img src={ImgVector} className={"IngVector"} alt=""/>
                <input className={"input"}  onChange={(e)=>handle(e)} value={state.input}  id={"input"} type="text"/>
            </div>
        </div>
    )
}
export default Index