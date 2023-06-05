import React, { useState } from "react"
import { useMutation } from "@apollo/client";
import { REMOVE_NOTE, EDIT_NOTE } from "../utils/mutations";
import { Modal, Button, Form } from 'react-bootstrap';

const styles = {
    /* sticky notes */
    newNote: {
        backgroundImage: `url("assets/PostIt500.png")`,
        backgroundSize: '300px 300px',
        backgroundPosition: 'center',
        height: '300px',
        width: '300px',
        backgroundRepeat: 'no-repeat',
        padding: '3rem',
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'black',
    },
    editBtn: {
        backgroundColor: 'transparent',
    },
    deleteBtn: {
        backgroundColor: 'transparent',
    },
    noteTitle: {
        textAlign: 'center',
        fontSize: '22px',
        marginBottom: '1px',
        width:'210px',
    },
    noteContents: {
        textAlign: 'left',
        width:'210px',
        height: '132px',
    },
    footerBtns: {
        display: 'flex',
        justifyContent: 'right',
        width:'233px',
    },
    hr: {
        borderTop: '1px solid',
        borderBottom: 'none',
        marginTop: '1px',
    }

}

const Note = (props) => {
    const { note } = props;
    const [removeNote, {error}] = useMutation(REMOVE_NOTE);

    const handleNoteDelete = async (event) => {
        event.preventDefault();
        const id = event.target.id;
        try {
            const { data } = await removeNote({ variables: { _id: id } });
            console.log(data);
        } catch (e) {
            console.error(e);
        }
        window.location.reload();
    }

    const [editNote, {err}] = useMutation(EDIT_NOTE);
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        //discard any changes in the noteData in case it's opened again.
        setNoteData({ title: note.title, content: note.content, _id: note._id})
    }
    const handleEdit = () => {
        try
        {
            setShow(false)
            // hand things off to our mutation, hopefully
            editNote({ title: note.title, content: note.content, _id: note._id})
        } catch (err) { console.error(err); }
    }
    const handleOpen = () => {
        setShow(true)
    }

    const [noteData, setNoteData] = useState({
        title: note.title,
        content: note.content,
        _id: note._id
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
            const { data } = await editNote({ variables: {...noteData} });
            console.log(data);
        } catch (err) {
            console.error(err)
        }
        window.location.reload();
    }

    return (
        <>
            <div className="newNote" style={styles.newNote} key={note._id}> 
                {/* <header className="newNoteHeader">
                    <button className="closeBtn">
                    <i className="large material-icons">close</i>
                    </button>
                </header> */}
                <h1 style={styles.noteTitle}>{note?.title}</h1>
                <hr className="default" style={styles.hr}></hr>
                <p style={styles.noteContents}>{note?.content}</p>
                <footer className="footerBtns" style={styles.footerBtns}>
                    <button className="editBtn" style={styles.editBtn}>
                        <i className="medium material-icons" onClick={handleOpen}>edit</i>
                    </button>
                    <button className="deleteBtn" style={styles.deleteBtn} >
                        <i className="medium material-icons" onClick={handleNoteDelete} id={note?._id}>delete_forever</i>
                    </button>
                </footer>
            </div>
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
                            Discard Edits
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleEdit}>
                            Save Edits
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </>
    )
}
export default Note