
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import useFetch from "../components/useFetch";
const url = "https://pokeapi.co/api/v2/pokemon/jolteon";

const apiKey = "e3f7cf22dd3edac262ac80be651ffa17";
var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=";
const apiGeo = 'https://api.openweathermap.org/geo/1.0/direct?q=';
var query = "sacramento";

const Test2 = () =>
{
    const [weather, setWeather] = useState("");
    const [query, setQuery] = useState("");
    const { data, isPending, error } = useFetch(`${apiGeo}${query}&appid=${apiKey}`);
    console.log(data);
    
    async function handleWeatherFormSubmit(query)
    {
        var x;
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
                {error && (<div>Something went wrong...</div>)}
            </form>

        </main>
    );
}

export default Test2;