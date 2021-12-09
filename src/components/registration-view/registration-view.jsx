import PropTypes from 'prop-types';
import axios from 'axios';
import React, { useState } from 'react';

// React Bootstrap
import { Form, Button, Container, Col, Row, CardGroup, Card } from 'react-bootstrap';
import "./registration-view.scss"
export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirth_Date ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://quiet-taiga-13679.herokuapp.com/users/new', {
      Username: username,
      Password: password,
      Email: email,
      Birth_Date: birthday
    })
    .then(response => {
      const data = response.data;
      console.log(data)
      window.open('/', '_self');
    })
    .catch(e => {
      console.log('error registering the user')
    });
};
  return (
    <Container fluid className="registerContainer">
      <Row>
        <Col>
          <CardGroup>
            <Card className="registerCard">
              <Card.Body>
                <Card.Title className="text-center">Welcome to myMovies.</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">Please Register</Card.Subtitle>
            
                <Form>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control className="mb-3" type="date" value={birthday} onChange={e => setBirth_Date(e.target.value)} />
                  </Form.Group>
                  
                  <Button className="registerButton" variant="secondary" size="lg" type="submit" onClick={handleSubmit}>Register</Button>
                  
                </Form>
              </Card.Body>
            </Card>
        </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birth_Date: PropTypes.string.isRequired
  })
};