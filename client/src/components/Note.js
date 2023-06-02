import React from "react"

const styles = {
    /* sticky notes */
    newNote: {
        backgroundImage: `url("assets/PostIt500.png")`,
        backgroundSize: '250px 250px',
        backgroundPosition: 'center',
        height: '250px',
        width: '250px',
        backgroundRepeat: 'no-repeat',
        padding: '3rem',
    },
}

const Note = () => {



    return (
        <>
            <div className="newNote"> 
                <header className="newNoteHeader">
                    <button className="closeBtn">
                    <i className="large material-icons">close</i>
                    </button>
                </header>
                <h1> This is where we need to add info pulled from database. (member input title)</h1>
                <p>This is where the member typed note will show. need to add pulled info from database. </p>
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