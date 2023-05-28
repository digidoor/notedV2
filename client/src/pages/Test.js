import { useState, useEffect } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_NOTES, QUERY_USERS } from "../utils/queries";
import { ADD_NOTE } from "../utils/mutations";
import useFetch from "../components/useFetch";
const url = "https://pokeapi.co/api/v2/pokemon/jolteon";

const Test = () =>
{
    const { loading, data } = useQuery(QUERY_NOTES);
    const notes = data?.notes || [];
    const { loading: loading2, data: data2 } = useQuery(QUERY_USERS);
    const users = data2?.users || [];
    const { data: pokedata, isPending } = useFetch(url);
    const [addNote, {error} ] = useMutation(ADD_NOTE);
    console.log(addNote);
    const [content, setContent] = useState("");
    async function handleFormSubmit(event)
    {
        console.log("Entered submit handler");
        event.preventDefault();
        try
        {
            console.log("Entered try block before attempting to addNote.");
            console.log( "content:", content );
            //const { data } = await addNote({variables: {content} });
            const { data } = await addNote({
                variables: { content },
            });

            window.location.reload();
        } catch (err)
        {
            console.error(err);
        }
    }

    return (
        <main>
            <div className="whatever">Notes
                {loading ? (<div>Loading...</div>)
                    : (notes.map( note => <div>{note.content}</div> ) )}
            </div>
            <div className="whatever">Users
                {loading2 ? (<div>Loading...</div>)
                    : (users.map( user => <div>{user.username} {user.email} {user.password}</div> ) )}
            </div>

            <div className="whatever">Pokeymans
                {isPending ? (<div>Loading...</div>)
                    : (<div>{pokedata.species.name}<img src={pokedata.sprites.front_default}></img></div>)}
            </div>

            <form onSubmit={handleFormSubmit}>
                <input placeholder="New note..." value={content} onChange={ (event) => setContent(event.target.value)}/>
                <button type="submit">Add Note</button>
                {error && (<div>Something went wrong...</div>)}
            </form>
            <div>Content: {content}</div>
        </main>
    );
}

export default Test;