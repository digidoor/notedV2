import React from "react";
import { Modal } from 'rsuite';

export default function SingleEvent( props ) {
        const event = props.event;
        return (
        <>
        <Modal.Header>
            <Modal.Title as='div' >
                <h1>{event.title}</h1>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3>Date: {event.date}</h3>
            <h4>{event.time ? `Time:  ${event.time}` : ''}</h4>
            <h5>{event.description ? event.description :  ""}</h5>
        </Modal.Body>
    </>
    )
}
