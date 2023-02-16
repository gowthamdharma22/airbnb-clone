import React from "react";
import logo from "../img/airbnb.png"

export default function Navbar(){
    return(
        <nav>
            <img src={logo} className="logo"/>
        </nav>
    )
}