import React, { Component } from 'react'
import "../HeaderPart/Style.css"
import NavBar from '../NavbarPart/NavBar';
import Hamburger from "../Images/menuopen.png";
import SessionService from "../SessionManagement/SesssionService";

class Header extends Component {
    render() {

        const icon = new NavBar();
        const userSession = new SessionService();

        if(userSession.getUserSession() != null)
        {
            return (
                <header>
                    <img src={Hamburger} alt="menuopen" srcset="" onClick={icon.openNavbar}/>
                </header>
            )
        }

        else
        {
            return(
                <header></header>
            )
            
        }
    }
}

export default Header
