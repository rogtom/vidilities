import React, { useState, useEffect } from 'react';
import { Carousel, Card, CardColumns } from 'react-bootstrap';
import { withFirebase } from '../Firebase';
import FavCard from './FavoriteCard';

const UserFilms = ({ firebase }) => {

  const [films, setFilms] = useState(null);

  useEffect(() => {

    firebase.getUserFavorites(setFilms);

  }, []);

  const vavUpdate = () => {

  }

  return (

    <div className="d-flex justify-content-between flex-lg-wrap">
      {films?.map(el => <FavCard key={el.film.id}
                                 picture={el.film.picture}
                                 title={el.film.title}
                                 locations={el.film.locations}
                                 id={el.film.id}
                                 films={films}
                                 setFilms={setFilms} />)}
    </div>

  );
};

export default withFirebase(UserFilms);