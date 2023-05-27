import React, { useState } from 'react';
import { Container, Sidebar, Content, Header, Stack } from "rsuite";
import { Calendar, Badge, Button, Drawer, Placeholder } from 'rsuite';
import NewEventForm from '../components/NewEventForm';

const styles = {
  dayContainer: {
      width: "98%",
      height: "98%",
      backgroundColor: "white",
      margin: "13px",
      border: "2px solid",
      borderRadius: "5px",
      padding: "8px",
  },
  dayHeader: {
    height: "36px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "700",
    backgroundColor: "white",
    borderRadius: "5px",
    marginBottom: "16px",
  }
}

const today = new Date(Date.now());


function getTodoList(date) {
  const day = date.toDateString();
  
      return [];

}

export default function CalendarPage() {
  const [openWithHeader, setOpenWithHeader] = React.useState(false);
  const [calState, setCalState] = useState(today)
  console.log(calState);
  function renderCell(date) {
    const list = getTodoList(date);

    if (list.length) {
      return <Badge className="calendar-todo-item-badge" />;
    }

    return null;
  }


  return (
    <Container>
      <Sidebar style={{ width: 280 }}>
        <Stack
          spacing={6}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Calendar compact bordered renderCell={renderCell} onSelect={setCalState}/>{' '}
          <Button appearance='primary' block onClick={() => setOpenWithHeader(true)}>Add Event</Button>
        </Stack>
      </Sidebar>
      <Content>
        <div style={styles.dayContainer}>
            <Header style={styles.dayHeader}>{calState.toDateString()}</Header>
            <Content>
              <h4>Events:</h4>
            </Content>
        </div>
      </Content>
      
      {/*tags for the drawer*/}
      <Drawer open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
        <Drawer.Header>
          <Drawer.Title>Add New Event</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpenWithHeader(false)}>Cancel</Button>
            <Button onClick={() => setOpenWithHeader(false)} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <NewEventForm/>
        </Drawer.Body>
      </Drawer>
    </Container>
  );
}
