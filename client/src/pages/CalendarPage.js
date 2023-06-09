import React, { useState, useRef, forwardRef } from 'react';
import { Sidebar, Content, Header, Stack } from "rsuite";
import { Grid, Row, Col } from 'rsuite';
import { Calendar, Badge, Button, Drawer } from 'rsuite';
import { Form, ButtonToolbar, Input } from 'rsuite';
import {SchemaModel, StringType } from "schema-typed";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import { GET_EVENTS } from '../utils/queries';
import EventList from '../components/EventList';
import Weather from '../components/Weather';
import moment from 'moment/moment';

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
};


const today = new Date(Date.now());
const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const model = SchemaModel({
  title: StringType().isRequired("Title is Required"),
  date: StringType().isRequired("Date is required"),
  time: StringType(),
  description: StringType(),
});



export default function CalendarPage() {
  const [open, setOpen] = useState(false);
  const [calState, setCalState] = useState(today);
  const [newEvent, setNewEvent] = useState({ title: '', date: calState, time: '', description: ''});
  const [addEvent, { error }] = useMutation(ADD_EVENT);
  const { loading, data } = useQuery(GET_EVENTS);
  const events = data?.events || [];
  const formRef = useRef();

 
  function renderCell(date) {
    const list = events.filter(event => event.date === moment(date).format("YYYY-MM-DD"));
    if (list.length) {
      return <Badge content={list.length} className="calendar-todo-item-badge" />;
    }
    return null;
  }

  const submitNewEvent = async (event) => {
    event.preventDefault();
    setOpen(false);

    try {
      const { data } = await addEvent({
        variables: {...newEvent},  
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
    window.location.reload();
  };

  return (
    <>
    <Grid fluid>
      <Row>
        <Col xs={24} sm={12} md={10} lg={8} xl={6} xxl={4}>
          <Sidebar style={{ width: '280', color: 'black' }}>
            <Stack
              spacing={6}
              direction={"column"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              >
                <Calendar compact bordered renderCell={renderCell} onSelect={setCalState} />{' '}
                <Button appearance='primary' block onClick={() => setOpen(true)} style={styles.addEventBtn}>Add Event</Button>
              </Stack>
            </Sidebar>
        </Col>
        <Col xs={24} sm={12} md={14} lg={16} xl={18} xxl={20}>
          <div style={styles.dayContainer}>
            <Header style={styles.dayHeader}>{calState.toDateString()}</Header>
            <Content>
              <h2>Events:</h2>
              <EventList date={calState} events={events} loading={loading}/>
            </Content>
          </div>
        </Col>
      </Row>
    </Grid>
      {/*tags for the drawer*/}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Add New Event</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Form 
            ref={formRef}
            model={model}
            onChange={setNewEvent}
            onSubmit={submitNewEvent}>
            <Form.Group controlId="title">
              <Form.ControlLabel>Title</Form.ControlLabel>
              <Form.Control name="title"/>
              <Form.HelpText>Title is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="date">
              <Form.ControlLabel>Date</Form.ControlLabel>
              <Form.Control name="date" type="date"/>
              <Form.HelpText tooltip>Date is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="time">
              <Form.ControlLabel>Time</Form.ControlLabel>
              <Form.Control name="time" type="time"/>
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
                    onClick={submitNewEvent}>
                      Submit
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
    <Weather />
    </>
  );
}
