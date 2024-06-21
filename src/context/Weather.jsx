import { createContext, useContext, useState } from "react";
import { weatherapi, weatherapiuser } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
};

export const Weatherprovider = (props) => {

    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async () => {
        const response = await weatherapi(searchCity)
        setData(response);
    };

    const fetchUserData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            weatherapiuser(position.coords.latitude, position.coords.longitude).then((data)=>{setData(data)})
        });
    };

    return(
        <WeatherContext.Provider value={{searchCity, data, setSearchCity, fetchData, fetchUserData}}>
            {props.children}
        </WeatherContext.Provider>
    );
};