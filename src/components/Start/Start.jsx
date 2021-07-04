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

            use the menu at the bottom of the page to navigate around this website. you said i never made you a playlist, so 'school radio' is a playlist just for you (and has nothing to do with the game).
            <br /><br />
            be curious and take notes. the experience is best on a computer. click on links and use google if you need. there's a really lovely surprise waiting for you at the end to celebrate the new chapter of life you're embarking on.
            
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
