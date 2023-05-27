import React, { useState } from "react";
import { Form, ButtonToolbar, Button, Input } from 'rsuite';

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

export default function newEventForm() {
    return (
        <Form>
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
            <Form.Control name="time" type="time" autoComplete="off" />
        </Form.Group>
        <Form.Group controlId="description">
            <Form.ControlLabel>Description</Form.ControlLabel>
            <Form.Control rows={5} name="description" accepter={Textarea} />
        </Form.Group>
        <Form.Group>
            <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
                <Button appearance="default">Cancel</Button>
            </ButtonToolbar>
        </Form.Group>
    </Form>
    );
}