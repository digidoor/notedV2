import React from "react";

const styles = {
    // HEADER STYLING
    header: {
        backgroundColor: '#bbe8d9',
        height: '90px',
    },
    
  }


export default function Home() {

    return (
        <div className="container" style={styles.main}>
        <div className="row align-items-start ">
            <div className="weather">
                <div className="card weatherCard">
                    <div className="card-body">
                        <h5 className="card-title">Today's Weather</h5>
                        <input className="weatherInput" type="text" placeholder="Enter zip code here.."></input>
                        <h3>Current Temperature</h3>
                        <p className="weatherResults" id="temp"></p>
                        <h2>Max-Temperature:</h2>
                        <p className="weatherResults" id="maxtemp"></p>
                        <h2>Min-Temperature:</h2>
                        <p className="weatherResults" id="mintemp"></p>
                        <h3>Humidity</h3>
                        <p className="weatherResults" id="humidity"></p>
                        <h3>Wind</h3>
                        <h2>Speed:</h2>
                        <p className="weatherResults" id="windspeed"></p>
                        <button type="button" className="btn btn-outline-secondary seeWeather" id="fetch-button">
                            See Today's Weather
                        </button>
                    </div>
                </div>
            </div>
            <div id="stickyNotes" className="stickyNotes">
                <button type="button" className="btn btn-outline-secondary addNote" id="addNote" data-bs-toggle="modal"
                    data-bs-target="#myModal">
                    Add New Note
                </button>
                <div className="modal" id="myModal" tabindex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title">What do you need Noted?</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input class="notebody" id="noteBody" type="text"
                                    placeholder="Add your note here..."></input>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button id="saveNote" type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}