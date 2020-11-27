import React from "react";
import { Button, Card, ListGroup } from 'react-bootstrap';
import Location from '../Locations';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import Firebase, { FirebaseContext } from '../Firebase';


const FilmCard = ({title, picture, locations, firebase}) => {

const film = {
  title: title,
  picture: picture,
  locations: locations
}

const handleAddToFavorite = () => {
  firebase.addToUserFavorite('users',film)
    .then(()=> console.log('działa'))
    .catch(err => console.log(err))

}


  return (
    <FirebaseContext.Consumer>
      <Card className="Card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {locations.map(location => <Location key={location.id} name={location.display_name} picture={location.icon} />)}
        {/*<Button variant="primary">Add to favorite</Button>*/}

        <AuthUserContext.Consumer>
          {authUser =>
            authUser
              ? <Button variant="primary" onClick={handleAddToFavorite}>Add to favorite</Button>
              : <Button variant="primary"><Link to={ROUTES.SIGN_IN}>Sign In</Link></Button>
          }
        </AuthUserContext.Consumer>
      </Card.Body>
    </Card>
    </FirebaseContext.Consumer>
  )

}
export default withFirebase(FilmCard)