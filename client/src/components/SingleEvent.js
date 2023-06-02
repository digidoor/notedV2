import { useQuery } from "@apollo/client";
import React from "react";
import { Modal } from 'rsuite';
import { GET_SINGLE_EVENT } from '../utils/queries';

export default function SingleEvent( props ) {

    const { loading, data } = useQuery(GET_SINGLE_EVENT, {
        variables: { _id: props}
    })
    const event = data?.event || {};

    if (loading) {
        return (
            <Modal.Header>
                <Modal.Title>
                    Loading...
                </Modal.Title>
            </Modal.Header>
        )
    } else {
        return (
        <>
            <Modal.Header>
                <Modal.Title>
                    {event.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Date: {event.date}</h4>
                <h4>{event.time ? `Time:  ${event.time}` : ''}</h4>
                <p>{event.description ? event.description :  ""}</p>
            </Modal.Body>
        </>

        )
    }
}