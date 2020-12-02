import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Location from '../Locations';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';


const FilmCard = ({ title, id, picture, locations, firebase, showDetails, getDetails, imdbID }) => {

  const onHandleDetails = () => {

  getDetails(imdbID);
  showDetails();
}

  const film  = {
    id:id,
    title: title,
    picture: picture,
    locations: locations,
  };

  const handleAddToFavorite = () => {
    firebase.addToUserFavorite('users', {film})
      .then(() => console.log('działa'))
      .catch(err => console.log(err));

  };


  return (

      <Card className="Card d-flex flex-column " style={{ width: '18rem' }  }>
        <Card.Img variant="top" src={picture} />

        <Card.Body className="d-flex flex-column justify-content-between " >

          <div>
            <Card.Title>{title}</Card.Title>
            {locations?.map(location => <Location key={location.id}
                                                 name={location.display_name}
                                                 picture={location.icon} />)}
          </div>

          <div className="d-flex align-content-center justify-content-between">
            <AuthUserContext.Consumer>
            {authUser =>
              authUser
                ? <Button variant="outline-secondary" onClick={handleAddToFavorite} className="card-btn text-white ">Add to favorite</Button>
                : <Button variant="outline-secondary" className="card-btn text-white"><Link to={ROUTES.SIGN_IN} >Sign In</Link></Button>
            }
          </AuthUserContext.Consumer>
            <Button variant="outline-secondary" className="card-btn text-white" onClick={onHandleDetails}>Show details</Button>
          </div>
        </Card.Body>
      </Card>

  );

};
export default withFirebase(FilmCard);