import React from 'react';
import PropTypes from 'prop-types';
import "./movie-view.scss"
import { Row, Col, Container, Button, Form, CardGroup, Card } from 'react-bootstrap';
export class MovieView extends React.Component {

  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }
  
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container fluid className="moviesContainer">
        <Row>
          <Col>
            <div className="movie-view">
              <div className="movie-poster">
                <img src={movie.ImagePath} crossOrigin="true" />
              </div>
              <Card>
              <Card.Body>
                  <Form.Group>
                    <Card.Title>{movie.Title}</Card.Title>
                  </Form.Group>
              
              <Form.Group>
                <Form.Label>Genre: </Form.Label>
                <div>
                 <span className="value">{movie.Genre.Name}</span>
                </div>
              </Form.Group>
              <br></br>
              
              
              <Form.Group>
                <Form.Label>Description: </Form.Label>
                <div>
                <span className="value">{movie.Description}</span>
                </div>
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Label>Director: </Form.Label>
                <div>
                <span className="value">{movie.Director.Name}</span>
                </div>
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Label>Bio: </Form.Label>
                <div>
                <span className="value">{movie.Director.Bio}</span>
                </div>
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Label>Birth: </Form.Label>
                <div>
                <span className="value">{movie.Director.Birth}</span>
                </div>
              </Form.Group>
              <br></br>             
              <Form.Group>
                <Form.Label>Death: </Form.Label>
                <div>
                <span className="value">{movie.Director.Death}</span>
                </div>
              </Form.Group>
              <br></br>  
              
              </Card.Body>
              </Card>
              <div className="movie-button-div">
                <Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.date,
      Death: PropTypes.date
    }),
    Featured: PropTypes.bool,
    ImagePath: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};