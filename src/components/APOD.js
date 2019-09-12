import React, {useState, useEffect} from "react";
import axios from "axios";


export default function Astro(){
    const [pics, setPics] = useState([])

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY")
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log("Data did not show", error)
        })
    },[]);
    return <h1>Work It out</h1>
        
}
