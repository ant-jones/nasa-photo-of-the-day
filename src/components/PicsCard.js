import React from "react";

 const PicsCard = props => {
    return (
        <div className= "astroPics" key = {props.id}>
            <h2>Title: {props.title}</h2>
            <p>{props.date}</p>
            <img src= {props.img} alt="NASA"/>
            <p>Explanation: {props.explanation}</p>
            
        </div>
    );
};
export default PicsCard;