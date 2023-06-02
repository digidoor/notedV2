import { useQuery } from "@apollo/client";
import React, { useState} from "react";
import { List, Modal, Button, ButtonToolbar, Popover } from 'rsuite';
import { GET_EVENTS, } from '../utils/queries';
import SingleEvent from "./SingleEvent";

const EventPopover = React.forwardRef(({ content, ...props }, ref) => {
    return (
      <Popover ref={ref} title="Title" {...props}>
        <p>{content}</p>
      </Popover>
    );
  });

  const SingleEvent = ({ content, loading, children }) => (
    <Whisper
      trigger="hover"
      placement="autoVertical"
      controlId={`control-id-${content._id}`}
      speaker={   
            <Popover ref={ref} title={content.title}>
                test
            </Popover>
      }
    >
    </Whisper>
  );

export default function EventList( date ) {
    const { loading, data } = useQuery(GET_EVENTS);
    const events = data?.events || [];
    const day = date.date.toJSON().split('T')[0];
    const todayEvents = events.filter(event => event.date === day);
    const [open, setOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState("");
    const eventClose = () => setOpen(false);

    if (events.length > 0) {
        return (<>
            <List hover>
                <ButtonToolbar>
                {todayEvents.map(event => (         
                    <Button block onClick={(e) => setSelectedEvent(e.target.id)} appearance="ghost" >
                        <List.Item  key={event._id} id={event._id}>                
                            {event.time ? event.time : ''}  {event.title}                            
                        </List.Item>    
                    </Button>
                ))}
                </ButtonToolbar>
            </List>
            <Modal open={!!selectedEvent} onClose={eventClose} >
                <SingleEvent props={selectedEvent}/>    
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

