import { useState, useEffect } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_NOTES } from "../utils/queries";
import { ADD_NOTE, REMOVE_NOTE, REMOVE_ALL_NOTES } from "../utils/mutations";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Note from "../components/Note";



const styles = {
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
        backgroundSize: '300px 300px',
        backgroundPosition: 'center',
        height: '300px',
        width: '300px',
        backgroundRepeat: 'no-repeat',
        padding: '3rem',
    },
    /* Stickynote layout */
    stickyNotes: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        position: 'absolute',
        width: '99%',
        justifyContent: 'left',
        marginLeft: '18px',
        marginTop: '20px',
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
    },

}

export default function Home() {

    const { loading, data } = useQuery(QUERY_NOTES);
    const notes = data?.notes || [];
    
    const [addNote, {error}] = useMutation(ADD_NOTE);
 
    const [removeAllNotes, {er}] = useMutation(REMOVE_ALL_NOTES);

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
    }
    const handleOpen = () => {
        setShow(true)
    }

    const [noteData, setNoteData] = useState({
        title: "",
        content: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setNoteData({...noteData, [name] : value })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            console.log(noteData);
            const { data } = await addNote({ variables: {...noteData} });
            console.log(data);
        } catch (err) {
            console.error(err)
        }
        window.location.reload();
    }

    const handleNotesRemoval = async (event) => {
        event.preventDefault();
        try{
            await removeAllNotes();
        } catch (e) {
            console.error(e);
        }
        window.location.reload();
    }

    return (
        <>
            {/* ADDING NEW NOTES*/}
            <div id="stickyNotes" className="stickyNotes" style={styles.stickyNotes}>
                <button type="button" className="btn addNote" id="addNote" data-bs-toggle="modal"
                    data-bs-target="#myModal" style={styles.addNote} onClick={handleOpen}>
                    <div style={styles.btnTitle}>
                        <i className="large material-icons">add_circle_outline</i>
                        <h4>Add New Note</h4>
                    </div>
                </button>
                {notes ? notes.map((note) => {
                    return (
                        <Note note={note} />
                    )
                }) : null}
                <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleFormSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>What do you need Noted?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Note Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                onChange={handleChange}
                                value={noteData.title}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Add your thoughts..</Form.Label>
                            <Form.Control as="textarea" rows={3} name="content"
                                onChange={handleChange}
                                value={noteData.content} />
                        </Form.Group>
                    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={(e) => {
                            e.preventDefault()
                            handleClose(e)
                        }}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Save Note
                        </Button>
                    </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        </>

    )
}