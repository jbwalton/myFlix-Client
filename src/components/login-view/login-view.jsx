import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';



import PropTypes from 'prop-types';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <Container fluid className="loginContainer" >

      <Navbar bg="navColor" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">myMovies</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link href="#register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Card className="loginCard">
        <Card.Body>
          <Card.Title className="text-center">Welcome to myMovies.</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">Please Login</Card.Subtitle>
          
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Login
            </Button>
            
          </Form>
        </Card.Body>  
      </Card>
    </Container>
  );
}