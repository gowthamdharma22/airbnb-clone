import React from "react";
import star from "../img/Star.png"

export default function Card(props){
   // console.log(props)
    return(
        <div className="card">
            <img src={props.img} className="card-kat"/>
            <div className="card-rev">
                <img src={star} className="card-star"/>
                <span className="rat">{props.rat}</span>
                <span className="grey">{props.rc}</span>
                <span className="grey">{props.cou}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong>/ person</p>
        </div>
    )
}