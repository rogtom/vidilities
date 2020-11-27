import React, { useState, useEffect } from 'react';
import { Carousel, Card ,CardColumns} from 'react-bootstrap';
import { withFirebase } from '../Firebase';
import FavCard from './FavoriteCard';

const UserFilms = ({ firebase }) => {

  const [films, setFilms] = useState(null);

  useEffect(() => {

    firebase.getUserFavorites(setFilms);

  }, []);

  return (
    // <div>
    //
    //   <ul>
    //     {films.map(el => <li key={el.film.id}>{el.film.title}</li> )}
    //   </ul>
    //
    // </div>

    <CardColumns>
      {films?.map(el => <FavCard key={el.film.id} picture={el.film.picture} title={el.film.title} locations={el.film.locations} id={el.film.id}/>)}
    </CardColumns>
  );
};

export default withFirebase(UserFilms);