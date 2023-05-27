import React, { useState } from 'react';
import { Container, Sidebar, Content, Header } from "rsuite";
import { Calendar, Badge } from 'rsuite';

const styles = {
  dayContainer: {
      width: "98%",
      height: "93%",
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
  
  const [calState, setCalState] = useState(today)
  console.log(calState);
  function renderCell(date) {
    const list = getTodoList(date);

    if (list.length) {
      return <Badge className="calendar-todo-item-badge" />;
    }

    return null;
  }

  function selectDate(date) {
    console.log(date);
    console.log(typeof date);
    setCalState(date);
  }


  return (
    <Container>
      <Sidebar style={{ width: 280 }}>
          <Calendar compact bordered renderCell={renderCell} onSelect={selectDate}/>{' '}
      </Sidebar>
      <Content>
        <div style={styles.dayContainer}>
            <Header style={styles.dayHeader}>{calState.toDateString()}</Header>
            <Content>
              <h4>Events:</h4>
            </Content>
        </div>
      </Content>
    </Container>
  );
}
