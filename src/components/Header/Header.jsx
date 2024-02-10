import React from "react";
import './header.css'
import { ReactComponent as Logo } from "../../assets/svg/IMAGE.svg";


const Header=()=> {
    return(
        <div className="header">
            <Logo />
            <div className="link">
                <p>About</p>
                <p>Services</p>
                <p>Projects</p>
                <p>Blog</p>
                <p>Book a call</p>
            </div>
        </div>
    )
}
export   default Header