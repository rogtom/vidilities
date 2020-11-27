import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { withFirebase } from '../Firebase';


const FavCard = ({ id, title, picture, locations, firebase, setFilms, films }) => {





  const removeFav = () => {


    let film = [...films].filter(el =>el.film.id !== id)
    setFilms([...film] )

    firebase.removeFavorite({ favorites: [...film] })


  };


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ListGroup variant="flush">
          {locations.map(el => <ListGroup.Item key={el.id}>{el.display_name}</ListGroup.Item>)}

        </ListGroup>
        <Button variant="primary" onClick={removeFav}>Remove from favorite</Button>
      </Card.Body>
    </Card>
  );
};
export default withFirebase(FavCard);