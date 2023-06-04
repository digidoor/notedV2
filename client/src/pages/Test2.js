
import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from "../components/useFetch";

const apiKey = "e3f7cf22dd3edac262ac80be651ffa17";
var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=";
const apiGeo = 'https://api.openweathermap.org/geo/1.0/direct?q=';
//var query = "sacramento";

const Test2 = () =>
{
    const [weather, setWeather] = useState("");
    const [query, setQuery] = useState("");
    //const { data, isPending, error } = useFetch(`${apiGeo}${query}&appid=${apiKey}`);
    //console.log(data);
    
    async function handleWeatherFormSubmit(event)
    {
        event.preventDefault();
        try
        {
            var weatherObj = {};
            var geoData = await axios.get(`${apiGeo}${query}&appid=${apiKey}`);
            var { lat, lon } = geoData.data[0];
            console.log("first axios: ", geoData.data);
            console.log("lat: ", lat, "lon: ", lon);
            var weatherBox = await axios.get(`${apiURL + lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
            console.log("weatherBox: ", weatherBox);
            console.log("weatherBox.data: ", weatherBox.data);
            console.log("weatherBox.data.list[0]: ", weatherBox.data.list[0]);
            console.log("weatherBox.data.list[0].weather: ", weatherBox.data.list[0].weather);
            console.log("weatherBox.data.list[0].weather[0]: ", weatherBox.data.list[0].weather[0]);
            console.log("weatherBox.data.list[0].weather[0].description: ", weatherBox.data.list[0].weather[0].description);
            weatherObj.day1 = weatherBox.data.list[0].weather[0].description;
            for(let i = 8; i < 41; i=i+8)
                weatherObj[`day${Math.floor(i/8) + 1}`] = weatherBox.data.list[i].weather[0].description;
        } catch (err) { console.error(err); }
        console.log("weatherObj: ", weatherObj);
        setQuery("");
        return weatherObj;
    }

    return (
        <main>
            <div>
                <h1>Weather</h1>
                <p>{weather}</p>
            </div>

            <form onSubmit={handleWeatherFormSubmit}>
                <input placeholder="City name..." value={query} onChange={ (event) => setQuery(event.target.value)}/>
                <button type="submit">Search Weather</button>
                {/* {error && (<div>Something went wrong...</div>)} */}
            </form>

        </main>
    );
}

export default Test2;