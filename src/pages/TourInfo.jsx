import React from "react";
import "./TourInfo.css"

const TourInfo = (props) => {

    return(
        <li className="tourinfo-li">
            <p className="date">{props.date}</p>
            <p className="city">{props.city}</p>
            <p className="place">{props.place}</p>
            <button className="buy-tickets">BUY TICKETS</button>
        </li>
    )
}

export default TourInfo;