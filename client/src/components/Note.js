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
        fontSize: '12px',
    },
}

const Note = (props) => {
    const {note} = props;


    return (
        <>
            {console.log(note.title)}
            {console.log(note.content)}
            <div className="newNote" style={styles.newNote}> 
                <header className="newNoteHeader">
                    <button className="closeBtn">
                    <i className="large material-icons">close</i>
                    </button>
                </header>
                <h1>{note?.title}</h1>
                 <p>{note?.content}</p>
                <footer className="footerBtn">
                    <button className="editBtn">
                    <i className="large material-icons">edit</i>
                    </button>
                    <button className="deleteBtn">
                    <i className="large material-icons">delete_forever</i>
                    </button>
                </footer>
            </div>
        </>
    )
}
export default Note