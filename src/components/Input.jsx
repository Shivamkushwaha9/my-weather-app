import React from "react";
import { useWeather } from "../context/Weather";

const Input = (props) => {
    const weather = useWeather();
    console.log('Weather', weather);
    return(
        <input 
        className="input-field"
        // placeholder={props.placeholder}
        value={weather.value}
        onChange={(e) => weather.setSearchCity(e.target.value)}
        
        />
    );
};

export default Input;