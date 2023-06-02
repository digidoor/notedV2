import React from "react"

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
    },
    noteContents: {
        textAlign: 'left',
        width:'250px',
        height: '200px',
    },
    footerBtns: {
        display: 'flex',
        justifyContent: 'right',
    }

}

const Note = (props) => {
    const { note } = props;


    return (
        <>
            {console.log(note.title)}
            {console.log(note.content)}
            <div className="newNote" style={styles.newNote}> 
                {/* <header className="newNoteHeader">
                    <button className="closeBtn">
                    <i class="large material-icons">close</i>
                    </button>
                </header> */}
                <h1 style={styles.noteTitle}>{note?.title}</h1>
                <p style={styles.noteContents}>{note?.content}</p>
                <footer className="footerBtns" style={styles.footerBtns}>
                    <button className="editBtn" style={styles.editBtn}>
                        <i class="medium material-icons">edit</i>
                    </button>
                    <button className="deleteBtn" style={styles.deleteBtn}>
                        <i class="medium material-icons">delete_forever</i>
                    </button>
                </footer>
            </div>
        </>
    )
}
export default Note