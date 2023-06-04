import React from 'react';




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
    cardDate: {
        textAlign: 'center',
    },
    cardTitle: {
        textAlign: 'center',
    },
    resGroup: {
        display: 'inline-flex',
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

    return (
        <>
            <hr className="default" style={styles.hr}></hr>
            <h1 className="weather" style={styles.weatherTitle}>Weather</h1>
            <div style={styles.searchContainer}>
                <input style={styles.searchBar} placeholder="Enter City Name"></input>
                <button className="btn" style={styles.searchCityBtn}><i className="large material-icons">search</i></button>
            </div>
            <div className="card-group" style={styles.cards}>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top"
                        alt="Hollywood Sign on The Hill" />
                    <div className="card-body">
                        <div style={styles.test}>
                            <h5 className="card-title" style={styles.cardDate}>Date from API</h5>
                            <h6 style={styles.cardTitle}>Temperature</h6>
                            <div style={styles.resGroup}>
                                <h7>Current: </h7>
                                <p className="card-text" style={styles.weatherResults}>CurrTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>High: </h7>
                                <p className="card-text" style={styles.weatherResults}>HighTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>Low: </h7>
                                <p className="card-text" style={styles.weatherResults}>LowTemp</p>
                            </div>
                            <h6>Humidity </h6>
                            <p className="card-text" style={styles.weatherResults}>HumidRes</p>
                            <h6>Wind </h6>
                            <p className="card-text" style={styles.weatherResults}>WindRes</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                    <div style={styles.test}>
                            <h5 className="card-title" style={styles.cardDate}>Date from API</h5>
                            <h6 style={styles.cardTitle}>Temperature</h6>
                            <div style={styles.resGroup}>
                                <h7>Current: </h7>
                                <p className="card-text" style={styles.weatherResults}>CurrTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>High: </h7>
                                <p className="card-text" style={styles.weatherResults}>HighTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>Low: </h7>
                                <p className="card-text" style={styles.weatherResults}>LowTemp</p>
                            </div>
                            <h6>Humidity </h6>
                            <p className="card-text" style={styles.weatherResults}>HumidRes</p>
                            <h6>Wind </h6>
                            <p className="card-text" style={styles.weatherResults}>WindRes</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                    <div style={styles.test}>
                            <h5 className="card-title" style={styles.cardDate}>Date from API</h5>
                            <h6 style={styles.cardTitle}>Temperature</h6>
                            <div style={styles.resGroup}>
                                <h7>Current: </h7>
                                <p className="card-text" style={styles.weatherResults}>CurrTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>High: </h7>
                                <p className="card-text" style={styles.weatherResults}>HighTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>Low: </h7>
                                <p className="card-text" style={styles.weatherResults}>LowTemp</p>
                            </div>
                            <h6>Humidity </h6>
                            <p className="card-text" style={styles.weatherResults}>HumidRes</p>
                            <h6>Wind </h6>
                            <p className="card-text" style={styles.weatherResults}>WindRes</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                    <div style={styles.test}>
                            <h5 className="card-title" style={styles.cardDate}>Date from API</h5>
                            <h6 style={styles.cardTitle}>Temperature</h6>
                            <div style={styles.resGroup}>
                                <h7>Current: </h7>
                                <p className="card-text" style={styles.weatherResults}>CurrTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>High: </h7>
                                <p className="card-text" style={styles.weatherResults}>HighTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>Low: </h7>
                                <p className="card-text" style={styles.weatherResults}>LowTemp</p>
                            </div>
                            <h6>Humidity </h6>
                            <p className="card-text" style={styles.weatherResults}>HumidRes</p>
                            <h6>Wind </h6>
                            <p className="card-text" style={styles.weatherResults}>WindRes</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                    <div style={styles.test}>
                            <h5 className="card-title" style={styles.cardDate}>Date from API</h5>
                            <h6 style={styles.cardTitle}>Temperature</h6>
                            <div style={styles.resGroup}>
                                <h7>Current: </h7>
                                <p className="card-text" style={styles.weatherResults}>CurrTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>High: </h7>
                                <p className="card-text" style={styles.weatherResults}>HighTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>Low: </h7>
                                <p className="card-text" style={styles.weatherResults}>LowTemp</p>
                            </div>
                            <h6>Humidity </h6>
                            <p className="card-text" style={styles.weatherResults}>HumidRes</p>
                            <h6>Wind </h6>
                            <p className="card-text" style={styles.weatherResults}>WindRes</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top"
                        alt="Palm Springs Road" />
                    <div className="card-body">
                    <div style={styles.test}>
                            <h5 className="card-title" style={styles.cardDate}>Date from API</h5>
                            <h6 style={styles.cardTitle}>Temperature</h6>
                            <div style={styles.resGroup}>
                                <h7>Current: </h7>
                                <p className="card-text" style={styles.weatherResults}>CurrTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>High: </h7>
                                <p className="card-text" style={styles.weatherResults}>HighTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>Low: </h7>
                                <p className="card-text" style={styles.weatherResults}>LowTemp</p>
                            </div>
                            <h6>Humidity </h6>
                            <p className="card-text" style={styles.weatherResults}>HumidRes</p>
                            <h6>Wind </h6>
                            <p className="card-text" style={styles.weatherResults}>WindRes</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top"
                        alt="Los Angeles Skyscrapers" />
                    <div className="card-body">
                    <div style={styles.test}>
                            <h5 className="card-title" style={styles.cardDate}>Date from API</h5>
                            <h6 style={styles.cardTitle}>Temperature</h6>
                            <div style={styles.resGroup}>
                                <h7>Current: </h7>
                                <p className="card-text" style={styles.weatherResults}>CurrTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>High: </h7>
                                <p className="card-text" style={styles.weatherResults}>HighTemp</p>
                            </div>
                            <div style={styles.resGroup}>
                                <h7>Low: </h7>
                                <p className="card-text" style={styles.weatherResults}>LowTemp</p>
                            </div>
                            <h6>Humidity </h6>
                            <p className="card-text" style={styles.weatherResults}>HumidRes</p>
                            <h6>Wind </h6>
                            <p className="card-text" style={styles.weatherResults}>WindRes</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Weather