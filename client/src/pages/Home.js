import React from "react";

const styles = {
    //Container that holds sidebar and stickynotes section
    container: {
        paddingTop: '28px',
        marginLeft: '0',
        fontSize: '18px',
        display: 'flex',
        justifyContent: 'left',
    },
    // Weather Sidebar
    weather: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'left',
        width: '295px',
        marginLeft: '15px',
    },
    weatherCard: {
        width: '288px',
        height: '600px',
        borderRight: '2px solid darkgrey',
        boxShadow: '0px 2px 0px lightgrey',
    },
    //content within the weather sidebar
    cardBody: {
        textAlign: 'center',

    },
    cardTitle: {
        fontSize: '30px',
        fontWeight: 'bold',
        // textShadow: '2px 2px 2px #ef7c8e',
    },

    viewWeather:{
        display: 'flex',
        marginTop:'5px',
    },

    // textbox for zip code
    weatherInput: {
        margin: '3px 3px 3px 3px',
        width:'70%',
    },
    // view weather button in sidebar
    viewWeatherBtn: {
        width: '30%',
        backgroundColor: '#bbe8d9',
        color: 'black',
        fontWeight: 'bold',
    },
    // titles for each section (weather)
    h3: {
        fontSize: '22px',
        textDecoration: 'underline',
    },
    // sub-titles
    h2: {
        fontSize: '18px',
    },
    /* weather results from API */
weatherResults: {
    fontSize: '18px',
},
/* sticky notes */
addNote: {
   backgroundImage: `url("./notelanding.png")`,
    padding: '3rem',
},
/* Stickynote layout */
stickyNotes: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    position: 'absolute',
    width: '75%',
    justifyContent: 'left',
    marginLeft: '300px',
},

/* Modal Styling */
/* modal Title */
h1: {
    fontSize: '20px',
},

/* text box for input */
noteBody: {
    width: '470px',
    height: '275px',
},

btnIcon: {
    display: 'flex',
    justifyContent: 'center',
}

}


export default function Home() {

    return (
        // WEATHER SIDEBAR
        <div className="container" style={styles.container}>
            <div className="row align-items-start ">
                <div className="weather" style={styles.weather}>
                    <div className="card weatherCard" style={styles.weatherCard}>
                        <div className="card-body" style={styles.cardBody}>
                            <h5 className="card-header" style={styles.cardTitle}>View Today's Weather</h5>
                            <div style={styles.viewWeather}>
                                <input className="weatherInput" type="text" placeholder="Enter zip code here.." style={styles.weatherInput}></input>
                            <button type="button" className="btn btn-outline-secondary seeWeather " id="fetch-button" style={styles.viewWeatherBtn}>
                            <i className="material-icons" style={styles.btnIcon}>filter_drama</i>
                            </button>
                            </div>
                            <h3 style={styles.h3}>Current Temperature</h3>
                            <p className="weatherResults" id="temp" style={styles.weatherResults}></p>
                            <h2 style={styles.h2}>Max-Temperature:</h2>
                            <p className="weatherResults" id="maxtemp" style={styles.weatherResults}></p>
                            <h2 style={styles.h2}>Min-Temperature:</h2>
                            <p className="weatherResults" id="mintemp" style={styles.weatherResults}></p>
                            <h3 style={styles.h3}>Humidity</h3>
                            <p className="weatherResults" id="humidity" style={styles.weatherResults}></p>
                            <h3 style={styles.h3}>Wind</h3>
                            <h2 style={styles.h2}>Speed:</h2>
                            <p className="weatherResults" id="windspeed" style={styles.weatherResults}></p>
                        </div>
                    </div>
                </div>
                {/* ADDING NEW NOTES*/}
                <div id="stickyNotes" className="stickyNotes" style={styles.stickyNotes}>
                    <button type="button" className="btn btn-outline-secondary addNote" id="addNote" data-bs-toggle="modal"
                        data-bs-target="#myModal" style={styles.addNote}>
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
                                    <input className="notebody" id="noteBody" type="text"
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