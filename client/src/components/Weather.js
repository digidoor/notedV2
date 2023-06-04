import React from 'react';
import { useState } from 'react';
import axios from 'axios';
const apiKey = "e3f7cf22dd3edac262ac80be651ffa17";
var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=";
const apiGeo = 'https://api.openweathermap.org/geo/1.0/direct?q=';

const styles = {
    // decorative divider line
    hr: {
        borderTop: '1px solid Black',
        borderBottom: 'none',
        marginTop: '50px',
    },
    // title
    weatherTitle: {
        textAlign: 'center',
        marginTop: '25px',
        marginBottom: '15px',
        color: 'black',
    },
    // Container that holds the search bar and button for city input
    searchContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    // city input
    searchBar: {
        width: '30%',
        height: '35px',
    },
    // search button
    searchCityBtn: {
        width: '7%',
        height: '35px',
        marginLeft: '10px',
        backgroundColor: '#bbe8d9',
        color: 'black',
        fontWeight: 'bold',
        boxShadow: '2px 2px 0px darkgrey',
    },


}

const Weather = () => {
    const [query, setQuery] = useState("");
    const [weatherObj, setWeatherObj] = useState({});
    
    async function handleWeatherFormSubmit(event)
    {
        event.preventDefault();
        try
        {
            var temp = {};
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
            temp.day1 = weatherBox.data.list[0].weather[0].description;
            for(let i = 8; i < 41; i=i+8)
                temp[`day${Math.floor(i/8) + 1}`] = weatherBox.data.list[i].weather[0].description;
        } catch (err) { console.error(err); }
        console.log("weatherObj: ", temp);
        setQuery("");
        setWeatherObj({...temp});
        console.log("weatherObj.day1: ", weatherObj.day1);
        return weatherObj;
    }

    return (
        <>
        <hr className="default" style={styles.hr}></hr>
            <h1 className="weather" style={styles.weatherTitle}>Weather</h1>
            <div style={styles.searchContainer} >
                <form onSubmit={handleWeatherFormSubmit}>
                    <input style={styles.searchBar} placeholder="Enter City Name" value={query} onChange={ (event) => setQuery(event.target.value)}></input>
                    <button className="btn" style={styles.searchCityBtn}><i className="large material-icons">search</i></button>
                </form>
            </div>
            <div className="card-group">
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top"
                        alt="Hollywood Sign on The Hill" />
                    <div className="card-body">
                        <h5 className="card-title">Date from API</h5>
                        <h6>Temperature</h6>
                        <h7>Current:{weatherObj.day1}</h7>
                        <p className="card-text">CurrTemp</p>
                        <h7>High</h7>
                        <p className="card-text">HighTemp</p>
                        <h7>Low</h7>
                        <p className="card-text">LowTemp</p>
                        <h6>Humidity</h6>
                        <p className="card-text">HumidRes</p>
                        <h6>Wind</h6>
                        <p className="card-text">WindRes</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                        <h5 className="card-title">Date from API</h5>
                        <h6>Temperature</h6>
                        <h7>Current</h7>
                        <p className="card-text">CurrentTemp</p>
                        <h7>High</h7>
                        <p className="card-text">HighTemp</p>
                        <h7>Low</h7>
                        <p className="card-text">LowTemp</p>
                        <h6>Humidity</h6>
                        <p className="card-text">HumidRes</p>
                        <h6>Wind</h6>
                        <p className="card-text">WindRes</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                        <h5 className="card-title">Date from API</h5>
                        <h6>Temperature</h6>
                        <h7>Current</h7>
                        <p className="card-text">CurrentTemp</p>
                        <h7>High</h7>
                        <p className="card-text">HighTemp</p>
                        <h7>Low</h7>
                        <p className="card-text">LowTemp</p>
                        <h6>Humidity</h6>
                        <p className="card-text">HumidRes</p>
                        <h6>Wind</h6>
                        <p className="card-text">WindRes</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                        <h5 className="card-title">Date from API</h5>
                        <h6>Temperature</h6>
                        <h7>Current</h7>
                        <p className="card-text">CurrentTemp</p>
                        <h7>High</h7>
                        <p className="card-text">HighTemp</p>
                        <h7>Low</h7>
                        <p className="card-text">LowTemp</p>
                        <h6>Humidity</h6>
                        <p className="card-text">HumidRes</p>
                        <h6>Wind</h6>
                        <p className="card-text">WindRes</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                        <h5 className="card-title">Date from API</h5>
                        <h6>Temperature</h6>
                        <h7>Current</h7>
                        <p className="card-text">CurrentTemp</p>
                        <h7>High</h7>
                        <p className="card-text">HighTemp</p>
                        <h7>Low</h7>
                        <p className="card-text">LowTemp</p>
                        <h6>Humidity</h6>
                        <p className="card-text">HumidRes</p>
                        <h6>Wind</h6>
                        <p className="card-text">WindRes</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                        <h5 className="card-title">Date from API</h5>
                        <h6>Temperature</h6>
                        <h7>Current</h7>
                        <p className="card-text">CurrentTemp</p>
                        <h7>High</h7>
                        <p className="card-text">HighTemp</p>
                        <h7>Low</h7>
                        <p className="card-text">LowTemp</p>
                        <h6>Humidity</h6>
                        <p className="card-text">HumidRes</p>
                        <h6>Wind</h6>
                        <p className="card-text">WindRes</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top"
                        alt="Los Angeles Skyscrapers" />
                    <div className="card-body">
                        <h5 className="card-title">Date from API</h5>
                        <h6>Temperature</h6>
                        <h7>Current</h7>
                        <p className="card-text">CurrentTemp</p>
                        <h7>High</h7>
                        <p className="card-text">HighTemp</p>
                        <h7>Low</h7>
                        <p className="card-text">LowTemp</p>
                        <h6>Humidity</h6>
                        <p className="card-text">HumidRes</p>
                        <h6>Wind</h6>
                        <p className="card-text">WindRes</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Weather