import React, { useState } from "react";

const WeatherPanel = () => {
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=9951267a2388dea1b991f3de605cdfd2&lang=es";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=9951267a2388dea1b991f3de605cdfd2&lang=es";

    const [weather, setWeather] = useState([]);

    const [forecast, setForecast] = useState([])

    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);

    const [location, setLocation] = useState("");


    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);
        //weather
        //formando url para conseguir el tiempo actual

        urlWeather = urlWeather + cityUrl + loc;

        //utilizamos el api fetch para la llamada 

        await fetch(urlWeather).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((weatherData) => {
            setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        })


        //forecast

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((forecastData) => {
            setForecast(forecastData);
            setLoading(false);
            setShow(true);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        })
    }

}