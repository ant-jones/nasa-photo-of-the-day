import React, {useState, useEffect} from "react";
import axios from "axios";
import PicsCard from "./PicsCard.js"

export default function Astro(props){
    const [pics, setPics] = useState([])

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY")
        .then(response => {
            const pics = response.data.photos;
            console.log(pics)
            setPics(pics);
        })
        .catch(error => {
            console.log("Data did not show", error)
        })
    },[]);
    return (
        <div className= "getData">
            {pics.map(pic => {
                console.log(pics)
               
                return (
                <PicsCard 
                 key = {pic.id}
                 earthDate = {pic.earth_date}
                 img = {pic.img_src} />
                )
            })}
        </div>
   
    )
}
