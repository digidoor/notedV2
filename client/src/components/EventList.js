import { useQuery } from "@apollo/client";
import React from "react";
import { List, Modal, Placeholder, Button, ButtonToolbar } from 'rsuite';
import { GET_EVENTS } from '../utils/queries';


export default function EventList( date ) {
    const { loading, data } = useQuery(GET_EVENTS);
    const events = data?.events || [];
    const day = date.date.toJSON().split('T')[0];
    const todayEvents = events.filter(event => event.date === day);
    const [open, setOpen] = React.useState(false);
    const eventOpen = () => {
        setOpen(true);
        console.log();
    }
    const eventClose = () => setOpen(false);

    if (events.length > 0) {
        return (<>
            <List hover>
                <ButtonToolbar>
                {todayEvents.map(event => (         
                    <Button block onClick={eventOpen}>
                        <List.Item  key={event._id}>                
                            {event.title}                            
                    </List.Item>    
                    </Button>
                ))}
                </ButtonToolbar>
            </List>
            <Modal open={open} onClose={eventClose}>
                <Modal.Header>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Placeholder.Paragraph />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={eventClose} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={eventClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

            </>)
    } else if ( !loading ) {
        return (<List hover><List.Item>No Events Today</List.Item></List>)
    } else {
        return (<List hover><List.Item>Loading...</List.Item></List>)
    }




}