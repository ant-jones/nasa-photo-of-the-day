import React from "react";

 const PicsCard = props => {
    return (
        <div className= "astroPics" key = {props.id}>
            <h2>Astro Pics Date: {props.earth_date}</h2>
            <p>Pics of the Moon {props.img_src}</p>
        </div>
    );
};
export default PicsCard;