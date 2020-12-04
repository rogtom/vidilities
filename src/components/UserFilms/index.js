import React, { useState, useEffect } from 'react';
import { withFirebase } from '../Firebase';
import FavCard from './FavoriteCard';

const UserFilms = ({ firebase }) => {

  const [films, setFilms] = useState(null);

  useEffect(() => {

    firebase.getUserFavorites(setFilms);

  }, []);



  return (

    <div className="container d-flex flex-column flex-lg-row">
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