import { useState, useEffect } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_NOTES } from "../utils/queries";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const styles = {
    //Container that holds sidebar and stickynotes section
    // container: {
    //     paddingTop: '28px',
    //     marginLeft: '0',
    //     fontSize: '18px',
    //     display: 'flex',
    //     justifyContent: 'left',
    // },
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
        color: 'black',
        // textShadow: '2px 2px 2px #ef7c8e',
    },

    viewWeather: {
        display: 'flex',
        marginTop: '5px',
    },

    // textbox for zip code
    weatherInput: {
        margin: '8px 3px 3px 4px',
        width: '70%',
        color: 'black',
    },
    // view weather button in sidebar
    viewWeatherBtn: {
        width: '30%',
        backgroundColor: '#bbe8d9',
        color: 'black',
        fontWeight: 'bold',
        marginTop: '6px',
        boxShadow: '2px 2px 0px darkgrey',
    },
    // titles for each section (weather)
    h3: {
        fontSize: '22px',
        textDecoration: 'underline',
        color: 'black',
    },
    // sub-titles
    h2: {
        fontSize: '18px',
        color: 'black',
    },
    /* weather results from API */
    weatherResults: {
        fontSize: '18px',
        color: 'black',
    },
    // The Div that holds the clear notes button
    clearNotes: {
        display: 'flex',
        justifyContent: 'end',
        marginRight: '18px',
        marginTop: '10px',
    },

    clearNotesBtn: {
        width: '18%',
        backgroundColor: '#bbe8d9',
        color: 'black',
        fontWeight: 'bold',
        marginTop: '6px',
        boxShadow: '2px 2px 0px darkgrey',
    },

    /* sticky notes */
    addNote: {
        backgroundImage: `url("assets/PostIt500.png")`,
        backgroundSize: '250px 250px',
        backgroundPosition: 'center',
        height: '250px',
        width: '250px',
        backgroundRepeat: 'no-repeat',
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
        marginLeft: '18px',
        marginTop: '18px',
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
    },
    btnTitle: {
        // display:'flex',
        // justifyContent: 'center',
        color: 'black',
        fontSize: '10px',
    }

}


export default function Home() {

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    }
    const handleOpen = () => {
        setShow(true)
    }




    return (
        // WEATHER SIDEBAR
        <>
            {/* <div className="weather" style={styles.weather}>
                <div className="card weatherCard" style={styles.weatherCard}>
                    <div className="card-body" style={styles.cardBody}>
                        <h5 className="card-header" style={styles.cardTitle}>View Today's Weather</h5>
                        <div style={styles.viewWeather}>
                            <input className="weatherInput" type="text" placeholder="Enter zip code here.." style={styles.weatherInput}></input>
                            <button type="button" className="btn seeWeather " id="fetch-button" style={styles.viewWeatherBtn}>
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
            </div> */}
            {/* clear notes button */}
            <div className="clearNotes" style={styles.clearNotes}>
                <button type="button" className="btn clearNotesBtn" id="clearNotesBtn" style={styles.clearNotesBtn}>
                    Clear Sticky Notes
                </button>
            </div>
            {/* ADDING NEW NOTES*/}
            <div id="stickyNotes" className="stickyNotes" style={styles.stickyNotes}>
                <button type="button" className="btn addNote" id="addNote" data-bs-toggle="modal"
                    data-bs-target="#myModal" style={styles.addNote} onClick={handleOpen}>
                    <div style={styles.btnTitle}>
                        <i className="large material-icons">add_circle_outline</i>
                        <h4>Add New Note</h4>
                    </div>
                </button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>What do you need Noted?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Note Title</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Add your thoughts..</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Note
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>

    )
}