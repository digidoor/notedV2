import { useQuery } from "@apollo/client";
import React from "react";
import { List } from 'rsuite';
import { GET_EVENTS } from '../utils/queries';

const styles = {
    welcomeSection: {
        color: 'Black',
    },
    welcomeBlurb: {
        fontSize: '18px',
        paddingTop: '15px',
    }

}

export default function EventList( date ) {
    const { loading, data } = useQuery(GET_EVENTS);
    const events = data?.events || [];
    console.log(events);

    if (events.length > 0) {
        return (
            <List hover>
                {events.map(event => (
                    <List.Item key={event._id}>{event.title}</List.Item>)    
                )}
            </List>
            )
    } else if ( !loading ) {
        return (<List hover><List.Item>No Events Today</List.Item></List>)
    } else {
        return (<List hover><List.Item>Loading...</List.Item></List>)
    }
}