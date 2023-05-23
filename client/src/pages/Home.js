import React from "react";

export default function Home() {

    return (
        <div class="container">
        <div class="row align-items-start ">
            <div class="weather">
                <div class="card weatherCard">
                    <div class="card-body">
                        <h5 class="card-title">Today's Weather</h5>
                        <input class="weatherInput" type="text" placeholder="Enter zip code here.."></input>
                        <h3>Current Temperature</h3>
                        <p class="weatherResults" id="temp"></p>
                        <h2>Max-Temperature:</h2>
                        <p class="weatherResults" id="maxtemp"></p>
                        <h2>Min-Temperature:</h2>
                        <p class="weatherResults" id="mintemp"></p>
                        <h3>Humidity</h3>
                        <p class="weatherResults" id="humidity"></p>
                        <h3>Wind</h3>
                        <h2>Speed:</h2>
                        <p class="weatherResults" id="windspeed"></p>
                        <button type="button" class="btn btn-outline-secondary seeWeather" id="fetch-button">
                            See Today's Weather
                        </button>
                    </div>
                </div>
            </div>
            <div id="stickyNotes" class="stickyNotes">
                <button type="button" class="btn btn-outline-secondary addNote" id="addNote" data-bs-toggle="modal"
                    data-bs-target="#myModal">
                    Add New Note
                </button>
                <div class="modal" id="myModal" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title">What do you need Noted?</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <input class="notebody" id="noteBody" type="text"
                                    placeholder="Add your note here..."></input>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button id="saveNote" type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}