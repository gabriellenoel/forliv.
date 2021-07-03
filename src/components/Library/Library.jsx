import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import React, { useState } from 'react';
  import Container from "react-bootstrap/Container";
  import Button from "react-bootstrap/Button";
  import Row from "react-bootstrap/Row";
  import Col from "react-bootstrap/Col";
  import Alert from 'react-bootstrap/Alert';
  import Modal from 'react-bootstrap/Modal';
  import Form from 'react-bootstrap/Form';
  import InputGroup from 'react-bootstrap/InputGroup';
  import './Library.css';
  
  function Library() {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
  
    return (
      <div className="library">
          <Container className="study-hall">
          <Row className="name-of-the-game"><h3>the library.</h3></Row>
          <Row>
        <Col>
        <Button variant="info" onClick={handleShow2}>play study music.</Button>
        </Col>
        <Col>
        <Button variant="info" onClick={handleShow}>time to study.</Button>
        </Col>
        </Row>
          </Container>
  
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>study time.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <center><iframe src="https://giphy.com/embed/26gJA9SSe4m54MYec" width="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><br /><br /></center>
          You open up your textbook and then fire up a <a href="https://docs.google.com/document/d/1nrb1jo8JnNmhp3c_k6paiQkxRAU3JN2Bzraeuul6ku0/edit?usp=sharing">Google Doc</a> on your laptop to take notes.<br /><br />

         </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" type="button" onClick={handleClose}>
              Finish Studying
          </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>listen.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              It's your favorite study playlist. You can play through the songs here or <a href="https://open.spotify.com/playlist/2IeJSNAuQQm7ZPGJkITy1l">open it in Spotify.</a> <br /><br />
              <iframe src="https://open.spotify.com/embed/playlist/2IeJSNAuQQm7ZPGJkITy1l?theme=0" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose2}>
              Close Music Player
            </Button>
          </Modal.Footer>
        </Modal>
  
      </div>
    );
  }
  
  export default Library;
  