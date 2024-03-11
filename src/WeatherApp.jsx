import Searchbox from "./Searchbox";
import Infobox from "./Infobox";
import { useState } from "react";

export default function WeatherApp(){
 let [weatherInfo, setweatherInfo] = useState( {city : "woodland",
 feelslike : 24.84,
 temp : 25.05,
 tempMin : 25.05,
 tempMax : 25.05,
 humidity : 47,
 weather : "haze"})
 const updateInfo = (newinfo) =>{
    setweatherInfo(newinfo);
 }
    return (
        <>
        <Searchbox updateInfo={updateInfo}/>
        <Infobox info={weatherInfo}/>
        </>
    )
}