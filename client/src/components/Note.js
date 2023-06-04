import React from "react"
import { useMutation } from "@apollo/client";
import { REMOVE_NOTE } from "../utils/mutations";

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
    },
    noteContents: {
        textAlign: 'left',
        width:'298px',
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
                        <i class="medium material-icons">edit</i>
                    </button>
                    <button className="deleteBtn" style={styles.deleteBtn} >
                        <i class="medium material-icons" onClick={handleNoteDelete} id={note?._id}>delete_forever</i>
                    </button>
                </footer>
            </div>
        </>
    )
}
export default Note