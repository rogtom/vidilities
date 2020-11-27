import React from "react";
import { Button, Card, ListGroup } from 'react-bootstrap';


const FavCard = ({id, title, picture, locations}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ListGroup variant="flush">
          {locations.map(el => <ListGroup.Item>{el.display_name}</ListGroup.Item>)}

        </ListGroup>
        <Button variant="primary">Remove from favorite</Button>
      </Card.Body>
    </Card>
  )
}
export default FavCard