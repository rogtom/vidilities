import React, { useState, useEffect } from 'react';
import { withFirebase } from '../Firebase';
import FavCard from './FavoriteCard';

const UserFilms = ({ firebase }) => {
	const [films, setFilms] = useState(null);

	useEffect(() => {
		firebase.getUserFavorites(setFilms);
	}, [firebase]);

	return (
		<div className='container d-flex    '>
			<div className='row'>

					{films?.map((el) => (
            <div class=' col-md-6 col-xl-4' key={el.film.id}>
						<FavCard

							picture={el.film.picture}
							title={el.film.title}
							locations={el.film.locations}
							id={el.film.id}
							films={films}
							setFilms={setFilms}
						/>
            </div>
					))}

			</div>
		</div>
	);
};

export default withFirebase(UserFilms);
