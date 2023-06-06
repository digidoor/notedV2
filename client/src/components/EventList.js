import React, { useState, useRef, forwardRef } from "react";
import { List, Modal, Button, ButtonToolbar, Drawer, Form, Input } from 'rsuite';
import { SchemaModel, StringType } from "schema-typed";
import { useMutation, useQuery } from '@apollo/client';
import { EDIT_EVENT, REMOVE_EVENT } from '../utils/mutations';
import SingleEvent from "./SingleEvent";
import moment from "moment/moment";

const styles = {
    dayContainer: {
        width: "98%",
        height: "98%",
        backgroundColor: "white",
        margin: "13px",
        border: "2px solid",
        borderRadius: "5px",
        padding: "8px",
        color: 'black',
    },
    dayHeader: {
        color: 'black',
        height: "36px",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "700",
        backgroundColor: "white",
        borderRadius: "5px",
        marginBottom: "16px",
    },
    addEventBtn: {
        backgroundColor: '#bbe8d9',
        color: 'black',
        fontWeight: 'bold',
        boxShadow: '2px 2px 0px darkgrey',
    },
    submitBtn: {
        backgroundColor: '#bbe8d9',
        color: 'black',
        fontWeight: 'bold',
        boxShadow: '2px 2px 0px darkgrey',
    },
    cancelBtn: {
        backgroundColor: '#bbe8d9',
        color: 'black',
        fontWeight: 'bold',
        boxShadow: '2px 2px 0px darkgrey',
    },
    hiddenID: {
        display: 'none',
    },
};

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const model = SchemaModel({
    title: StringType().isRequired("Title is Required"),
    date: StringType().isRequired("Date is required"),
    time: StringType(),
    description: StringType(),
});


export default function EventList({ date, events, loading }) {
    const day = moment(date).format("YYYY-MM-DD");
    const todayEvents = events.filter(event => event.date === day);
    const [selectedEvent, setSelectedEvent] = useState("");
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ title: '', date: '', time: '', description: '', _id: '' });
    const formRef = useRef();
    const [editEvent] = useMutation(EDIT_EVENT);
    const [removeEvent] = useMutation(REMOVE_EVENT);

    const getEvent = (id) => {
        return events[events.findIndex((event) => id === event._id)];
    };

    const submitEditEvent = async (event) => {
        event.preventDefault();
        setOpen(false);
        console.log(formData);
        try {
            const { data } = await editEvent({
                variables: { ...formData },
            });
            console.log(data);
        } catch (e) {
            console.error(e);
        }
        window.location.reload();
    };

    const handleEditButton = () => {
        const event = getEvent(selectedEvent);
        console.log(event);
        setSelectedEvent("");
        setFormData({ ...event });
        console.log(formData);
        setOpen(true);
    };

    const handleDeleteButton = async (event) => {
        event.preventDefault();
        setOpen(false);
        console.log(selectedEvent);
        try {
            const { data } = await removeEvent({ variables: { _id: selectedEvent } });
            console.log(data);
        } catch (e) {
            console.error(e);
        }
        window.location.reload();
    };

    return (<>

        <List hover>
            <ButtonToolbar>
                {todayEvents.map(event => (
                    <Button block key={event._id} onClick={(e) => setSelectedEvent(e.target.id)} appearance="ghost" >
                        <List.Item key={event._id} id={event._id} as="h4">
                            {event.time ? event.time + ':' : ''}  {event.title}
                        </List.Item>
                    </Button>
                ))}
            </ButtonToolbar>
        </List>
        <Modal open={!!selectedEvent} onClose={(e) => { setSelectedEvent(""); }} >
            <SingleEvent event={{ ...getEvent(selectedEvent) }} />
            <Modal.Footer>
                <Button onClick={(e) => { setSelectedEvent(""); }} appearance="primary">
                    Ok
                </Button>
                <Button onClick={handleEditButton} appearance="subtle">
                    Edit
                </Button>
                <Button onClick={handleDeleteButton} appearance="subtle">
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>

        <Drawer open={open} onClose={() => setOpen(false)}>
            <Drawer.Header>
                <Drawer.Title>Edit Event</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
                <Form
                    ref={formRef}
                    model={model}
                    formValue={formData}
                    onChange={setFormData}
                    onSubmit={submitEditEvent}>
                    <Form.Group controlid="_id" style={styles.hiddenID}><Form.Control name="_id"></Form.Control></Form.Group>
                    <Form.Group controlId="title">
                        <Form.ControlLabel>Title</Form.ControlLabel>
                        <Form.Control name="title" />
                        <Form.HelpText>Title is required</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.ControlLabel>Date</Form.ControlLabel>
                        <Form.Control name="date" type="date" />
                        <Form.HelpText tooltip>Date is required</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId="time">
                        <Form.ControlLabel>Time</Form.ControlLabel>
                        <Form.Control name="time" type="time" />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.ControlLabel>Description</Form.ControlLabel>
                        <Form.Control rows={5}
                            name="description"
                            accepter={Textarea} />
                    </Form.Group>
                    <Form.Group>
                        <Drawer.Actions>
                            <ButtonToolbar>
                                <Button
                                    appearance="primary"
                                    style={styles.submitBtn}
                                    onClick={submitEditEvent}>
                                    Save Edits
                                </Button>
                                <Button
                                    appearance="default"
                                    style={styles.cancelBtn}
                                    onClick={() => setOpen(false)}>Cancel</Button>
                            </ButtonToolbar>
                        </Drawer.Actions>
                    </Form.Group>
                </Form>
            </Drawer.Body>
        </Drawer>

    </>);
};

