import React, { useState, useEffect } from "react";
import { Carousel } from 'react-bootstrap';
import { withFirebase } from '../Firebase';
import Firebase from '../Firebase';


const CarouselItem = (picture, title) => {

  return (

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=First slide&bg=373940"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>

  )

}


const UserFilms = ({firebase}) => {

  const [films,setFilms] =useState([])

// useEffect(() => {
//
//   firebase.getUserFavorites(setFilms())
//
// },[])

  return (
    <div>


      <Carousel >
        {/*{films.map(film => <CarouselItem key={film.id}/>)}*/}
      </Carousel>


    </div>
  )
}

export default withFirebase(UserFilms)