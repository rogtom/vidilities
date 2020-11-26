import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Search = ({submitTerm}) => {

  const [search, setSearch] = useState('');

  const handleChange =(e) => {
    const value = e.target.value;
    setSearch(value);

  }

  const handleSubmit =(e) => {
    e.preventDefault();
    submitTerm(search)
    e.target.reset()
  }



  return (
    <form onSubmit={handleSubmit} >
      <Form.Group controlId="formBasicSearch">
        <Form.Label>Search for your favourite movie or TV series</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={handleChange}/>
        <Button type={'submit'} variant="primary">Find</Button>

      </Form.Group>
    </form>
  )
}

 export default Search