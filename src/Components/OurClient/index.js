import React from 'react';
import {Data} from "./Data";
import "./OurClient.scss"




const Index = () => {
    return (
        <div className={"OurClientSection"}>
            <div className="container">
                <div className="OurClientSectionBlock">
                    <div className="OurClientSectionBlockTitle">
                        <h1>наши клиенты</h1>
                    </div>
                    <div className="row">
                        {
                            Data.map((item)=>{
                                return (
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 gap-4">
                                        <img src={item.img} className={"imgBlock"} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;