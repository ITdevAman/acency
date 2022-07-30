import React from 'react';
import icons from "../../Assets/img_2.png"
import "./AboutBlock2.scss"


const Index = () => {
    return (
        <div className={"AboutBlock2Section"}>
             <div className="container">
                 <div className="AboutBlock2Section_block">
                     <div className="row">
                         <div className="col-lg-3 col-12">
                             <h1 className={"AboutBlock2Section_block_title"}>Lorem ipsum <span>dolor sit  adipiscing</span> elitaa dwet </h1>
                         </div>
                         <div className="col-lg-3  ">
                             <div className="AboutBlock2Section_block2">
                                 <div className="AboutBlock2Section_block2_box">
                                     <img src={icons}  className={"AboutBlock2Section_block2_box_icon"} alt=""/>
                                     <h4>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h4>
                                 </div>
                                 <div className="AboutBlock2Section_block2_box">
                                     <img src={icons}  className={"AboutBlock2Section_block2_box_icon"} alt=""/>
                                     <h4>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et</h4>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-3  ">
                             <div className="AboutBlock2Section_block2">
                                 <div className="AboutBlock2Section_block2_box">
                                     <img src={icons}  className={"AboutBlock2Section_block2_box_icon"} alt=""/>
                                     <h4>Aes eos qui ratione voluptatem sequi nesciunt</h4>
                                 </div>
                                 <div className="AboutBlock2Section_block2_box">
                                     <img src={icons}  className={"AboutBlock2Section_block2_box_icon"} alt=""/>
                                     <h4>Stiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</h4>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-3  ">
                             <div className="AboutBlock2Section_block2">
                                 <div className="AboutBlock2Section_block2_box">
                                     <img src={icons}  className={"AboutBlock2Section_block2_box_icon"} alt=""/>
                                     <h4>Fveniam, quis nostrum rcitationem ullam corporis suscipit laboriosam,</h4>
                                 </div>
                                 <div className="AboutBlock2Section_block2_box">
                                     <img src={icons}  className={"AboutBlock2Section_block2_box_icon"} alt=""/>
                                     <h4>Tnisi ut aliquid ex ea commodi conse</h4>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default Index;