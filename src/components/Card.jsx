import React from "react";

export default function Card(props) {
    let btxt
    if(props.openSpots===0) btxt="SOLD OUT";
    else if(props.location==="Online") btxt="Online";
    return (
        <div className="card">
        {btxt && <div className="card-b">{btxt}</div>}
            <img src={props.coverImg} className="card--image" />
            <div className="card--stats">
                <img src="img/Star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}