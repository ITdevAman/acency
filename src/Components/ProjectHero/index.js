import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import "./ProjectHero.scss"
import {useDispatch, useSelector} from "react-redux";
import {createCards} from "../../Redux/ReducersCard/Reducer";

const Index = () => {
    const [sum , setSum] = useState( 6 )
    const dispatch = useDispatch()
    const cards = useSelector(store =>store.cards)
    useEffect(()=>{
        if(cards.length === 0){
            dispatch(createCards())
        }else {
            console.log("Error")
        }
    },[])
    const Sum = () => {
        return setSum(sum + 4)
    }
    return (
        <div className={"ProjectHeroSection"}>
            <div className="container">
                <div className="ProjectHeroSectionBlock">
                    <h1>ПРОЕКТЫ Tortor sapien faucibus nisl sit </h1>
                    <div className="row">
                        {
                            cards.slice(0 , sum).map((item) => {
                                return (
                                    <div className="col-lg-6 col-md-6 gap-4">
                                        <div className="ProjectHeroSectionBlockCard">
                                            <img src={item.img} alt=""/>
                                            <div className={'ProjectHeroSectionBlockCard_block'}>
                                                <h1>{item.name}</h1>
                                                <div className={"ProjectHeroSectionBlockCard_block_desc"}>
                                                    <p>{item.desc.substr(0,150)}...</p>
                                                    <NavLink to={`${item.id}`}>ПОДРОБНЕЕ о проекте <FontAwesomeIcon className={"icon"} icon={faArrowRight}/></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={"ProjectHeroSectionBlock_btn"}>
                        <button onClick={Sum}>показать ещё проекты</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;