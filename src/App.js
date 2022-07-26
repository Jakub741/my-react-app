
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import studentData from "./mock-data.json";
import subjectData from "./mock-data-subject.json";
import groupData from "./mock-data-group.json";
import dateData from"./mock-data-date.json";



const App = () => {

  const [students, setStudents] = useState(studentData);
  const [subjects, setSubjects] = useState(subjectData);
  const [groups, setGroups] = useState(groupData);
  const[dates,setDates] = useState(dateData);

  const subjectByID = subjects[2];
  const groupByID = groups[0];
  return (
    <Container fluid>
      <Row>
        <Col>
        <h1>
            {subjectByID.name}
        </h1>
        <h2>
          {groupByID.name}
        </h2>
          
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Jméno</th>
                    <th>Příjmení</th>
                    <th>Termín</th>
                    <th>Známka</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student),dates.map((date) => (
                    <tr>
                    <td>{student.name}</td>
                    <td>{student.surname}</td>
                    <td>{date.date}</td>
                    <td>{student.grade}</td>
                  </tr>
                    )))}
                  
                </tbody>
          </Table>
        </Col>
      </Row>
      
    </Container>
  )
}

export default App

