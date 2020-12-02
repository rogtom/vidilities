import React from "react";
import { Modal, Button, Container, Row, Col, Image, ListGroup, ListGroupItem } from 'react-bootstrap';


function DetailsModal(props) {

  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="details-header">
        <Modal.Title id="contained-modal-title-vcenter">
          {props.details.Title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid details-body">
        <Container>
          <Row>
            <Col >
              <Image src={props.details.Poster} thumbnail />
            </Col>
            <Col>
              <ListGroup variant="flush"   >
                <ListGroup.Item className="details-list"><span className="details-list__title">Actors</span> : {props.details.Actors}</ListGroup.Item>
                <ListGroup.Item className="details-list"><span className="details-list__title">Awards</span> : {props.details.Awards}</ListGroup.Item>
                <ListGroup.Item className="details-list"><span className="details-list__title">Director</span> : {props.details.Director}</ListGroup.Item>
                <ListGroup.Item className="details-list"><span className="details-list__title">Genre</span> : {props.details.Genre}</ListGroup.Item>
                <ListGroup.Item className="details-list"><span className="details-list__title">Production</span> : {props.details.Production}</ListGroup.Item>
                <ListGroup.Item className="details-list"><span className="details-list__title">Released</span> : {props.details.Released}</ListGroup.Item>
                <ListGroup.Item className="details-list"><span className="details-list__title">Type</span> : {props.details.Type}</ListGroup.Item>
              </ListGroup>
              <p className="details-list__description" ><span className="details-list__title">Plot</span><span className="details-list__description">{props.details.Plot}</span></p>
            <Row>
              <Col>
                <ListGroup variant="flush" >
                <ListGroup.Item className="details-list"><span className="details-list__title">Released</span> : {props.details.Released}</ListGroup.Item>
                <ListGroup.Item className="details-list"><span className="details-list__title">Rated</span> : {props.details.Rated}</ListGroup.Item>
                <ListGroup.Item className="details-list"><span className="details-list__title">Runtime</span> : {props.details.Runtime}</ListGroup.Item>
              </ListGroup>
              </Col>
              <Col>
                <ListGroup variant="flush" >
                {props.details.Ratings?.map((el, i) =><ListGroupItem key={i} className="details-list"><span className="details-list__title">{el.Source}</span> : {el.Value}</ListGroupItem> )}
                </ListGroup>
              </Col>
            </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="details-footer">
        <Button variant="outline-secondary" className="details-btn" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default DetailsModal