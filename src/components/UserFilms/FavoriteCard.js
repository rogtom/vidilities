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
    <Card className="favoriteCard">
      <Card.Img variant="top" src={picture} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{title}</Card.Title>

            {locations.map(el =>
              <a href={el.url} target="_blank" rel="noreferrer" key={el.id}>
              <ListGroup.Item className="favoriteCardBody">
                {el.display_name}
              </ListGroup.Item>
            </a>)}


        </div>
        <div><Button variant="outline-secondary" className="text-white remove-btn" onClick={removeFav}>Remove from favorite</Button></div>
      </Card.Body>
    </Card>
  );
};
export default withFirebase(FavCard);