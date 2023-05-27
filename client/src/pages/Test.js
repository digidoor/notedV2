import { useQuery } from "@apollo/client";
import { QUERY_NOTES, QUERY_USERS } from "../utils/queries";
import useFetch from "../components/useFetch";
const url = "https://pokeapi.co/api/v2/pokemon/jolteon";

const Test = () =>
{
    const { loading, data } = useQuery(QUERY_NOTES);
    const notes = data?.notes || [];
    console.log(notes);
    const { loading: loading2, data: data2 } = useQuery(QUERY_USERS);
    const users = data2?.users || [];
    console.log(users);
    const { data: pokedata, isPending } = useFetch(url);
    console.log(pokedata);

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
        </main>
    );
}

export default Test;