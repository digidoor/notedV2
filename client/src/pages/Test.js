import { useState, useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_NOTES, QUERY_USERS } from "../utils/queries";
import { ADD_NOTE } from "../utils/mutations";
import useFetch from "../components/useFetch";
const url = "https://pokeapi.co/api/v2/pokemon/jolteon";

const apiKey = "e3f7cf22dd3edac262ac80be651ffa17";
var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=";
const apiGeo = 'https://api.openweathermap.org/geo/1.0/direct?q=';
var query = "sacramento";

const Test = () =>
{
    const { loading, data } = useQuery(QUERY_NOTES);
    const notes = data?.notes || [];
    const { loading: loading2, data: data2 } = useQuery(QUERY_USERS);
    const users = data2?.users || [];
    const { data: pokedata, isPending } = useFetch(url);
    const [addNote, {error} ] = useMutation(ADD_NOTE);
    console.log(addNote);
    
    const [ weather, setWeather ] = useState("");
    
    //const { data: geoData, geoPending } = useFetch(`${apiGeo}${query}&appid=${apiKey}`);
    //const { lon, lat } = geoData[0];
    //const { data: weatherData, weatherPending } = useFetch(`${apiURL + lat}&lon=${lon}&appid=${apiKey}&units=imperial`);

    //console.log(geoData);
    //var weather = geoData.then( stuff => console.log(stuff) );
    //console.log(weatherData);
    
    
    async function getGeo( query )
    {
        var x;
        var geoPromise = await fetch(`${apiGeo}${query}&appid=${apiKey}`);
        var geoData = await geoPromise.json();
        const { lon, lat } = geoData[0];
        var weatherPromise = await fetch(`${apiURL + lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
        var weatherData = await weatherPromise.json();
        return weatherData;
    }
    
    var stuff = getGeo(query);
    //stuff.then( a => console.log(a) );
    // stuff.then( a => console.log(a.city) );
    // stuff.then( a => console.log(a.list[0]) );
    //var weather = "";
    stuff.then( a => console.log(a.list[0].weather[0].description) );
    stuff.then( a => setWeather(a.list[0].weather[0].description) );
    //stuff.then( a => console.log(a.list[0].weather[0]).description );
    // console.log(stuff);
    // console.log(stuff.list);
    //console.log(stuff.list[0].weather);

    
    //const { city, setCity } =  useState("");
    
    //const { data: cityWeather, isPending: weatherPending } = useFetch(cityurl);
    
    const [content, setContent] = useState(""); // stuff for the addNote form
    async function handleFormSubmit(event)
    {
        event.preventDefault();
        try
        {
            const { data } = await addNote({ variables: { content }, });
            window.location.reload();
        } catch (err) { console.error(err); }
    }

    return (
        <main>
            <div>
                <h1>Weather</h1>
                <p>{weather}</p>
            </div>
            <div className="whatever"><h1>Notes</h1>
                {loading ? (<div>Loading...</div>)
                    : (notes.map( note => <div key={note._id}>{note.content}<p>{note._id}</p></div> ) )}
            </div>
            <div className="whatever"><h1>Users</h1>
                {loading2 ? (<div>Loading...</div>)
                    : (users.map( user => <div key={user._id}>{user.username} {user.email} {user.password}</div> ) )}
            </div>

            <div className="whatever"><h1>Pokeymans</h1>
                {isPending ? (<div>Loading...</div>)
                    : (<div>{pokedata.species.name}<img src={pokedata.sprites.front_default}></img></div>)}
            </div>

            <form onSubmit={handleFormSubmit}>
                <input placeholder="New note..." value={content} onChange={ (event) => setContent(event.target.value)}/>
                <button type="submit">Add Note</button>
                {error && (<div>Something went wrong...</div>)}
            </form>
            <div>Content: {content}</div>
        </main>
    );
}

export default Test;