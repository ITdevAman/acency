import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";
import "./HomeSlider.scss"
import {createCards} from "../../Redux/ReducersCard/Reducer";
import {useDispatch, useSelector} from "react-redux";


const Index = () => {
    const dispatch = useDispatch()
    const cards = useSelector(store => store.cards)
    useEffect(()=>{
        if(cards.length === 0){
            dispatch(createCards())
        }else {
            console.log("Error")
        }
    },[])
    let settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2200,
        centerMode: true,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div className={"HomeSliderSection"} id={"HomeSliderSection"}>
            <div className={"HomeSliderSectionBlock"}>
                <div className={"HomeSliderSectionBlockTitle"}><h2>ПРОЕКТЫ Tortor sapien faucibus nisl sit </h2></div>
                <div className={"HomeSliderSectionBlockSlider"}>
                    <div className={"CARD"}>
                        <div className="row">
                            <Slider {...settings}>
                                {cards.map((item) => {
                                    return (
                                        <div className="col-lg-4">
                                            <div className="ProjectHeroSectionBlockCard">
                                                <img src={item.img} alt=""/>
                                                <div className={'ProjectHeroSectionBlockCard_block'}>
                                                    <h1>{item.name}</h1>
                                                    <div className={"ProjectHeroSectionBlockCard_block_desc"}>
                                                        <p>{item.desc.substr(0,300)}...</p>
                                                        <NavLink to={`/${item.id}/`}>ПОДРОБНЕЕ о проекте <FontAwesomeIcon
                                                            className={"icon"}
                                                            icon={faArrowRight}/>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;