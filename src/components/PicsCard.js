import React from "react";

 const PicsCard = props => {
    return (
        <div className= "astroPics" key = {props.id}>
            <h1>Photo Of The Day</h1>
            <h2>Title: {props.title}</h2>
            <p>Date:{props.date}</p>
            <img src= {props.img} alt="NASA"/>
            <p>Explanation: {props.explanation}</p>
            
        </div>
    );
};
export default PicsCard;