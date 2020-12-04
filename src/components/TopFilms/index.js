import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Image, Col, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';


import { trackPromise } from 'react-promise-tracker';

import { LoadingIndicator } from '../Home';


const TopFilms = () => {

  const [pagination, setPagination] = useState({
    data: [],
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: [],
    currentFilms: []
  });

  const handlePageClick = event => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage
    setPagination({ ...pagination, offset })
  }

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)

    }))


  }, [pagination.data, pagination.numberPerPage, pagination.offset])




  useEffect(() => {
    trackPromise(
      fetch('https://imdb8.p.rapidapi.com/title/get-top-rated-movies', {
      'method': 'GET',
      'headers': {
        'x-rapidapi-key': '790017f6aemsh6c9d13e8a3f3896p12bf9bjsn9cfbc465c4f2',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      },
    }))
      .then(response => response.json())
      .then(response => response.map(el => new Object({ id: el.id.slice(7, -1) })

      ))
      .then(response => setPagination(prevState => ({
        ...prevState,
        data: [...response]
      })))
      .catch(err => {
        console.error(err);
      });

  },[])

  useEffect(() =>{

    pagination.currentData.forEach(el => (
      fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${el.id}&r=json`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "790017f6aemsh6c9d13e8a3f3896p12bf9bjsn9cfbc465c4f2",
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
        }
      })
        .then(response => response.json())
        .then(response => setPagination((prevState) => ({
          ...prevState,
          currentFilms: [...prevState.currentFilms, response]


        })))
        .catch(err => {
          console.error(err);
        })
    ))

  },[pagination.currentData, pagination.numberPerPage, pagination.offset])




  return (

      <div className="container d-flex flex-column justify-content-center align-items-center top-films vh-100">
        <h1>Top films</h1>
        <ListGroup className="justify-content-center">
          {pagination.currentFilms && pagination.currentFilms.map((item => (
            <ListGroupItem key={item.imdbID} className="bg-transparent">
              <Row>
                <Col lg={3}>
                  <Image src={item.Poster} thumbnail className="top-film-img" />
                </Col>
                <Col className="d-flex flex-column justify-content-between">
                  <Row className="align-items-center">
                    <h5>Title : {item.Title}</h5>
                  </Row>
                  <Row className="d-flex flex-column">
                    <p>IMDb ID : {item.imdbID}</p>
                    <p>IMDb Rating : {item.imdbRating}</p>
                    <p>Genre : {item.Genre}</p>
                    <p>Year : {item.Year}</p>
                    <p>Actors : {item.Actors}</p>
                    <p>Plot : {item.Plot}</p>
                  </Row>
                </Col>
              </Row>
            </ListGroupItem>
          )))
          }
        </ListGroup>


        <LoadingIndicator />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={pagination.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          previousClassName={'prev'}
          nextClassName={'next'}
          pageClassName={'page'}
        />

      </div>

  );


}

export default TopFilms