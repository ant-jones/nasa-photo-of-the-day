import React, {useState, useEffect} from "react";
import axios from "axios";
import PicsCard from "./PicsCard.js"

export default function Astro(props){
    const [pics, setPics] = useState([])

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=Mgaf2TNAl9usyH3Ivagn5GTRvxnTzYjpfbLLxtSj")
        .then(response => {
            const pics = response.data;
            console.log(pics)
            setPics(pics);
        })
        .catch(error => {
            console.log("Data did not show", error)
        })
    },[]);
    return (
        <div className= "getData">
          <PicsCard 
           title = {pics.title}
           date = {pics.date}
           img = {pics.url}
           explanation = {pics.explanation} 
            />
            
        </div>
   
    )
}
