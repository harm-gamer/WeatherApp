import { useState } from "react";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';


export default function Searchbox({updateInfo}){
    let [city,setcity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "2bcdf117b941d2328e3223efe2e6063b";

let getweatherInfo = async ()  =>{
  let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  let jsonresponse = await response.json();
console.log(jsonresponse);
  let result = {
    city : city,
    weather :jsonresponse.weather[0].main,
        temp : jsonresponse.main.temp,
    tempMin : jsonresponse.main.temp_min ,
    tempMax : jsonresponse.main.temp_max,
    humidity : jsonresponse.main.humidity,
    feelsLike : jsonresponse.main.feels_Like
  }
  console.log(result)
  return result;
}
let handlechange = (event) =>{
    setcity(event.target.value);

}
let handlesubmit = async(event) =>{
    event.preventDefault();
    setcity("");
   let newInfo =  await getweatherInfo();
   updateInfo(newInfo);
}


    return( 
        <>
     <form onSubmit={handlesubmit}>
        <TextField id="city" label="cityname"variant="outlined" value={city} onChange={handlechange}>cityname</TextField>
        <Button variant="contained" type="submit">click me!</Button>
     </form>
      
        </>
    )
}