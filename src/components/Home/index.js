import React, { useState, useEffect } from 'react';
import Search from '../Search';
import FilmCard from '../Card';

const Home = () => {

  const [term, setTerm] = useState('');
  const [filmData, setFilmData] = useState([]);


  const handleSearchSubmit = (search) => {

    setTerm(search);

  };


  useEffect(() => {

    fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${term}`, {
      'method': 'GET',
      'headers': {
        'x-rapidapi-key': '790017f6aemsh6c9d13e8a3f3896p12bf9bjsn9cfbc465c4f2',
        'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
      },
    })
      .then(results => results.json())
      .then(data => data.results)

      .then(data => setFilmData(data))

      .catch(err => {
        console.error(err);
      });

  }, [term]);


  return (
    <div className="container">
      <h1>Home</h1>
      <Search submitTerm={handleSearchSubmit} />

      <div className="row justify-content-start  m-auto">
        {filmData.map(film => <FilmCard key={film.id}
                                        id={film.id}
                                        title={film.name}
                                        picture={film.picture}
                                        locations={film.locations} />)}
      </div>

    </div>
  );
};

export default Home;