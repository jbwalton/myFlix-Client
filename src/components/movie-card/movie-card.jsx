import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Container className="movieContainer">
        <Row>
          <Col>
            <Card>
              <Card.Img className="cardImage" variant="top" src={movie.ImagePath} />
              <div className="movieCardDiv">
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Description}</Card.Text>
                  
                      <Button variant="primary" onClick={() => onMovieClick(movie)}> Open</Button>
                  
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
} 
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};