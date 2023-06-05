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
    // City name
    weatherCity: {
        textAlign: 'center',
        color: 'black'
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
    cardDate: {
        textAlign: 'center',
    },
    cardTitle: {
        textAlign: 'center',
    },
    resGroup: {
        display: 'block',
        textAlign: 'center',
    },
    weatherResults: {
        marginLeft: '3px',

    },
    test: {
        display: 'inline-block',
    },
    cards: {
        textAlign: 'center',
    }


}

const Weather = () => {
    const [query, setQuery] = useState("");
    const [weatherObj, setWeatherObj] = useState(null);
    const [weatherCity, setWeatherCity] = useState('');
    
    async function handleWeatherFormSubmit(event)
    {
        event.preventDefault();
        try
        {
            var temp = {};
            var geoData = await axios.get(`${apiGeo}${query}&appid=${apiKey}`);
            var { lat, lon } = geoData.data[0];
            var weatherBox = await axios.get(`${apiURL + lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
            for(let i = 0; i < 40; i=i+8)
                temp[`day${Math.floor(i/8) + 1}`] = weatherBox.data.list[i];//.weather[0].description;
        } catch (err) { console.error(err); }
        setQuery("");
        setWeatherObj({...temp});
        setWeatherCity(weatherBox.data.city.name);
    }

    return (
        <>
            <hr className="default" style={styles.hr}></hr>
            <h1 className="weather" style={styles.weatherTitle}>Weather</h1>
            <div>
                <form onSubmit={handleWeatherFormSubmit} style={styles.searchContainer}>
                    <input style={styles.searchBar} placeholder="City or Area Code" value={query} onChange={ (event) => setQuery(event.target.value)}></input>
                    <button className="btn" style={styles.searchCityBtn}><i className="large material-icons">search</i></button>
                </form>
            </div>
            <h3 className="City" style={styles.weatherCity}>{weatherCity}</h3>
            <div className="card-group" style={styles.cards}>
                <div className="card">
                    <img src="../assets/weather.png" className="card-img-top"
                        alt="Hollywood Sign on The Hill" />
                    <div className="card-body">
                        <div style={styles.test}>
                            <h5 className="card-title" style={styles.cardDate}>{weatherObj ? `${weatherObj.day1.dt_txt}` : ""}</h5>
                            <p className="card-text" style={styles.weatherResults}><b>{weatherObj ? `${weatherObj.day1.weather[0].description}` : ""}</b></p>
                            <h6 style={styles.cardTitle}>Temperature</h6>
                            <div style={styles.resGroup}>
                                <p className="card-text" style={styles.weatherResults}>Current: {weatherObj ? `${weatherObj.day1.main.temp}F` : ""}</p>
                            </div>
                            <div style={styles.resGroup}>
                                <p className="card-text" style={styles.weatherResults}>High: {weatherObj ? `${weatherObj.day1.main.temp_max}F` : ""}</p>
                            </div>
                            <div style={styles.resGroup}>
                                <p className="card-text" style={styles.weatherResults}>Low: {weatherObj ? `${weatherObj.day1.main.temp_min}F` : ""}</p>
                            </div>
                            <h6>Humidity </h6>
                            <p className="card-text" style={styles.weatherResults}>{weatherObj ? `${weatherObj.day1.main.humidity}%` : ""}</p>
                            <h6>Wind </h6>
                            <p className="card-text" style={styles.weatherResults}>{weatherObj ? `${weatherObj.day1.wind.speed} MPH` : ""}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="../assets/weather.png" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                    <div style={styles.test}>
                            <h5 className="card-title" style={styles.cardDate}>{weatherObj ? `${weatherObj.day2.dt_txt}` : ""}</h5>
                            <p className="card-text" style={styles.weatherResults}><b>{weatherObj ? `${weatherObj.day2.weather[0].description}` : ""}</b></p>
                            <h6 style={styles.cardTitle}>Temperature</h6>
                            <div style={styles.resGroup}>
                                <p className="card-text" style={styles.weatherResults}>High: {weatherObj ? `${weatherObj.day2.main.temp_max}F` : ""}</p>
                            </div>
                            <div style={styles.resGroup}>
                                <p className="card-text" style={styles.weatherResults}>Low: {weatherObj ? `${weatherObj.day2.main.temp_min}F` : ""}</p>
                            </div>
                            <h6>Humidity </h6>
                            <p className="card-text" style={styles.weatherResults}>{weatherObj ? `${weatherObj.day2.main.humidity}%` : ""}</p>
                            <h6>Wind </h6>
                            <p className="card-text" style={styles.weatherResults}>{weatherObj ? `${weatherObj.day2.wind.speed} MPH` : ""}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="../assets/weather.png" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                    <div style={styles.test}>
                            <h5 className="card-title" style={styles.cardDate}>{weatherObj ? `${weatherObj.day3.dt_txt}` : ""}</h5>
                            <p className="card-text" style={styles.weatherResults}><b>{weatherObj ? `${weatherObj.day3.weather[0].description}` : ""}</b></p>
                            <h6 style={styles.cardTitle}>Temperature</h6>
                            <div style={styles.resGroup}>
                                <p className="card-text" style={styles.weatherResults}>High: {weatherObj ? `${weatherObj.day3.main.temp_max}F` : ""}</p>
                            </div>
                            <div style={styles.resGroup}>
                                <p className="card-text" style={styles.weatherResults}>Low: {weatherObj ? `${weatherObj.day3.main.temp_min}F` : ""}</p>
                            </div>
                            <h6>Humidity </h6>
                            <p className="card-text" style={styles.weatherResults}>{weatherObj ? `${weatherObj.day3.main.humidity}%` : ""}</p>
                            <h6>Wind </h6>
                            <p className="card-text" style={styles.weatherResults}>{weatherObj ? `${weatherObj.day3.wind.speed} MPH` : ""}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="../assets/weather.png" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                    <div style={styles.test}>
                            <h5 className="card-title" style={styles.cardDate}>{weatherObj ? `${weatherObj.day4.dt_txt}` : ""}</h5>
                            <p className="card-text" style={styles.weatherResults}><b>{weatherObj ? `${weatherObj.day4.weather[0].description}` : ""}</b></p>
                            <h6 style={styles.cardTitle}>Temperature</h6>
                            <div style={styles.resGroup}>
                                <p className="card-text" style={styles.weatherResults}>High: {weatherObj ? `${weatherObj.day4.main.temp_max}F` : ""}</p>
                            </div>
                            <div style={styles.resGroup}>
                                <p className="card-text" style={styles.weatherResults}>Low: {weatherObj ? `${weatherObj.day4.main.temp_min}F` : ""}</p>
                            </div>
                            <h6>Humidity </h6>
                            <p className="card-text" style={styles.weatherResults}>{weatherObj ? `${weatherObj.day4.main.humidity}%` : ""}</p>
                            <h6>Wind </h6>
                            <p className="card-text" style={styles.weatherResults}>{weatherObj ? `${weatherObj.day4.wind.speed} MPH` : ""}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="../assets/weather.png" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                    <div style={styles.test}>
                            <h5 className="card-title" style={styles.cardDate}>{weatherObj ? `${weatherObj.day5.dt_txt}` : ""}</h5>
                            <p className="card-text" style={styles.weatherResults}><b>{weatherObj ? `${weatherObj.day5.weather[0].description}` : ""}</b></p>
                            <h6 style={styles.cardTitle}>Temperature</h6>
                            <div style={styles.resGroup}>
                                <p className="card-text" style={styles.weatherResults}>High: {weatherObj ? `${weatherObj.day5.main.temp_max}F` : ""}</p>
                            </div>
                            <div style={styles.resGroup}>
                                <p className="card-text" style={styles.weatherResults}>Low: {weatherObj ? `${weatherObj.day5.main.temp_min}F` : ""}</p>
                            </div>
                            <h6>Humidity </h6>
                            <p className="card-text" style={styles.weatherResults}>{weatherObj ? `${weatherObj.day5.main.humidity}%` : ""}</p>
                            <h6>Wind </h6>
                            <p className="card-text" style={styles.weatherResults}>{weatherObj ? `${weatherObj.day5.wind.speed} MPH` : ""}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Weather