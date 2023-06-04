import React, { useState} from "react";
import { List, Modal, Button, ButtonToolbar, } from 'rsuite';
import SingleEvent from "./SingleEvent";
import moment from "moment/moment";

export default function EventList( {date, events, loading} ) {
    const day = moment(date).format("YYYY-MM-DD");
    const todayEvents = events.filter(event => event.date === day);
    const [selectedEvent, setSelectedEvent] = useState("");

    const getEvent = (id) => {
        return events[events.findIndex((event) => id === event._id)];
    }
        return (<>

            <List hover>
                <ButtonToolbar>
                {todayEvents.map(event => (         
                    <Button block key={event._id} onClick={(e) => setSelectedEvent(e.target.id)} appearance="ghost" >
                        <List.Item  key={event._id} id={event._id} as="h4">                
                            {event.time ? event.time : ''}  {event.title}                            
                        </List.Item>    
                    </Button>
                ))}
                </ButtonToolbar>
            </List>
            <Modal open={!!selectedEvent} onClose={(e) => {setSelectedEvent("")}} >
                <SingleEvent event={{...getEvent(selectedEvent)}}/>    
                <Modal.Footer>
                    <Button onClick={(e) => {setSelectedEvent("")}} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={(e) => {setSelectedEvent("")}} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

            </>)
}

