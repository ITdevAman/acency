import React from "react";
import { bubble as Menu } from 'react-burger-menu'
import Index from "./index";
import  "./burger.scss"
class Burger extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }
    render () {
        return (
            <Menu Left>
                <Index/>
            </Menu>
        );
    }
}
export default Burger;