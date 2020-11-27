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
    <form onSubmit={handleSubmit}  className="form">
      <Form.Group controlId="formBasicSearch" className='formGrup'>
        <Form.Label className="formLabel">Search for your favourite movie or TV series</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={handleChange}/>
        <Button type={'submit'} variant="outline-secondary" size="sm" className="find" >Find</Button>

      </Form.Group>
    </form>
  )
}

 export default Search