import { useQuery } from "@apollo/client";
import { QUERY_NOTES } from "../utils/queries";

const Test = () =>
{
    var x;
    const { loading, data } = useQuery(QUERY_NOTES);
    const notes = data?.notes || [];

    return (
        <main>
            <div className="whatever">
                {loading ? (<div>Loading...</div>)
                    : (notes.map( note => <div>{note.content}</div> ) )}
            </div>
        </main>
    );
}

export default Test;