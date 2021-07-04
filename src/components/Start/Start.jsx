import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import './Start.css';

function Start() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="start">
        <Container className="start-here">
        <Row className="name-of-the-game"><h3>next chapter high.</h3></Row>
        <Row><Button variant="danger" onClick={handleShow}>start here.</Button>
        </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>surprise!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <center><i>it's the first day of senior year all over again.</i></center><br />

            you said i never made you a playlist? so in celebration of the new chapter you're embarking on soon, i made you a playlist, got you a second surprise, and then i hid them both inside of this app escape room style.
            <br /><br />
            be curious, take notes, click around. use google if you need.
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Lets go!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Start;
