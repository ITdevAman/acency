import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFaceLaughSquint, faFileLines, faHeart} from "@fortawesome/free-solid-svg-icons";
import "./AboutBlock.scss"

const Index = () => {
    return (
        <div className={"AboutBlockSection"}>
            <div className="container">
                <div className="AboutBlockSectionBlock">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className={"AboutBlockSectionBlock_box"}>
                                <FontAwesomeIcon className={"aboutIcon"} icon={faFaceLaughSquint} />
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={"AboutBlockSectionBlock_box"}>
                                <FontAwesomeIcon className={"aboutIcon"} icon={faFileLines} />
                                <h1>Ut enim ad minima v quia non numquam eius modi </h1>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={"AboutBlockSectionBlock_box"}>
                                <FontAwesomeIcon className={"aboutIcon"} icon={faHeart} />
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;