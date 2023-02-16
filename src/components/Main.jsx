import React from "react";
import grid from "../img/Group.jpg"

export default function Main(){
    return(
        <section className="main">
            <img src={grid} className="main-grid" />
            <div className="main-content">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}