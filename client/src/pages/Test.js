import { useQuery } from "@apollo/client";
import { QUERY_NOTES, QUERY_USERS } from "../utils/queries";

const Test = () =>
{
    const { loading, data } = useQuery(QUERY_NOTES);
    const notes = data?.notes || [];
    console.log(notes);
    const { loading: loading2, data: data2 } = useQuery(QUERY_USERS);
    const users = data2?.users || [];
    console.log(users);

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
        </main>
    );
}

export default Test;