import React from 'react';




const styles = {
    weatherTitle: {
        textAlign: 'center',
        marginTop: '30px',
        marginBottom: '25px',
    },

  searchBar: {
    width: '30%',
    height: '35px',
  },

  searchCityBtn: {
    width: '7%',
    height: '35px',
    marginLeft: '10px',
    backgroundColor: '#bbe8d9',
    color: 'black',
    fontWeight: 'bold',
    boxShadow: '2px 2px 0px darkgrey',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    // width: '600px',

},



}


const Weather = () => {

    return (
        <>
            <h1 className="weather" style={styles.weatherTitle}>Weather</h1>
          <div style={styles.searchContainer}>
            <input style={styles.searchBar} placeholder="Enter City Name"></input>
            <button className="btn" style={styles.searchCityBtn}><i className="large material-icons">search</i></button>
          </div>
            <div className="card-group">
                <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top"
                        alt="Hollywood Sign on The Hill" />
                    <div className="card-body">
                        <h5 className="card-title">Date from API</h5>
                        <h6>Temperature</h6>
                        <h7>Current:</h7>
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