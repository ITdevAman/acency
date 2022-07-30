import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-bootstrap";
import Axios from "axios";
import Slider from "react-slick";
import "./ProjectItem.scss"
import {CreateItem} from "../../Redux/ReducersCard/Reducer";



const Index = () => {
    let settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2200,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    };
    const params = useParams()
    const dispatch = useDispatch()
    const cardsItem = useSelector(store => store.cardsItem)
    useEffect(()=> {
        if (cardsItem.length === 0 ){
            dispatch(CreateItem(params.id))
        }else {
            console.log("Good job")
        }
    }, [])
    const [products, setProducts] = useState([])
    useEffect(() => {
        Axios.get("https://6290a40327f4ba1c65be05f7.mockapi.io/data")
            .then((res) => {
                setProducts(res.data)
            })
    }, [])
    return (
        <div className={"ProjectItemSection"} id={"ProjectItemSection"}>
            <div className="container">
                <div className="ProjectItemSectionBlock">
                    <h1>{cardsItem.name}</h1>
                    <div className="ProjectItemSectionBlock_img">
                        <img src={cardsItem.img} alt=""/>
                    </div>
                    <div className={"ProjectItemSectionBlock_span"}>
                        <p>{cardsItem.date}</p>
                    </div>
                    <div className={"ProjectItemSectionBlock_desc"}>
                        <p>{cardsItem.desc}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper neque dolor rhoncus vitae. Risus enim quis ornare quisque in eu, dui nam in. In nisl, lectus at ac ultrices tincidunt habitasse leo. Blandit et iaculis arcu elit tellus mattis. Auctor volutpat facilisis sit mi. Urna pulvinar semper diam ut et. At egestas ullamcorper a viverra arcu dignissim. Faucibus urna mi auctor enim, mi. Ut quam pretium dolor tellus nunc tristique ornare. Fusce nunc pulvinar diam et in dolor. Ipsum blandit quis interdum duis varius lectus mattis suspendisse purus. In cras sed tempor imperdiet amet. Aliquam tortor, viverra gravida nisl quam a tincidunt elementum. Faucibus at id in etiam et vulputate vulputate lobortis.</p>
                        <p>{cardsItem.desc1}</p>
                        <p>{cardsItem.desc2}</p>
                        <p>{cardsItem.desc3}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={"CARD"}>
                    <div className="row">
                        <Slider {...settings}>
                            {products.map((item) => {
                                return (
                                    <div className="col-lg-4">
                                        <div className="ProjectHeroSectionBlockCard">
                                            <img src={item.img} alt=""/>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="ProjectItemSectionBlock">
                    <div className={"ProjectItemSectionBlock_link"}>
                        <h2>Сссылки на проект</h2>
                        <div className={"ProjectItemSectionBlock_link_p"}>
                            <p>Веб сайт  </p>
                            <NavLink href={cardsItem.site}><span>{cardsItem.site}</span></NavLink>
                        </div>
                        <div className={"ProjectItemSectionBlock_link_p"}>
                            <p>Instagram  </p>
                            <NavLink href={cardsItem.instagram}><span>{cardsItem.instagram}</span></NavLink>
                        </div>
                        <div className={"ProjectItemSectionBlock_link_p"}>
                            <p>Заголовок  </p>
                            <NavLink href={''}><span>Тут текст в одну строку</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;


