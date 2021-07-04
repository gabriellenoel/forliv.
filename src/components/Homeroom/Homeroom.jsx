import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import './Homeroom.css';
import { getByDisplayValue } from '@testing-library/dom';
import superstore from './superstore.png';

function Homeroom() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [locker01, setLocker01] = useState(0);
    const [locker02, setLocker02] = useState(0);
    const [locker03, setLocker03] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const handleLocker01 = (event) => setLocker01(event.target.value);
    const handleLocker02 = (event) => setLocker02(event.target.value);
    const handleLocker03 = (event) => setLocker03(event.target.value);

    const handleLocker = () => {
        if (locker01 === "2" && locker02 === "16" && locker03 === "52") {
            setShow(false);
            setShow3(true);
            document.getElementById("error-txt").style.display = "none";
        } else {
            document.getElementById("error-txt").style.display = "block";
        }
    }

  return (
    <div className="homeroom">
        <Container className="homeroom-hub">
        <Row className="name-of-the-game"><h3>god, it's brutal out here.</h3></Row>
        <Row>
        <Col>
        <Button variant="info" onClick={handleShow}>go to your locker.</Button>
        </Col>
        <Col>
        <Button variant="info" onClick={handleShow2}>talk to ms. zephra.</Button>
        </Col>
        </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>enter your locker combo.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
<Form>
  <InputGroup size="lg" classname="mb-3">
  <InputGroup.Prepend>
  <InputGroup.Text id="inputGroup-sizing-sm">01</InputGroup.Text>
  </InputGroup.Prepend>
    <Form.Control className="locker-combo-input" onChange={handleLocker01} type="number" />
    </InputGroup><br />

 <InputGroup size="lg" classname="mb-3">
  <InputGroup.Prepend>
  <InputGroup.Text id="inputGroup-sizing-sm">02</InputGroup.Text>
  </InputGroup.Prepend>
    <Form.Control className="locker-combo-input" onChange={handleLocker02} type="number" />
    </InputGroup><br />

    <InputGroup size="lg" classname="mb-3">
  <InputGroup.Prepend>
  <InputGroup.Text id="inputGroup-sizing-sm">03</InputGroup.Text>
  </InputGroup.Prepend>
    <Form.Control className="locker-combo-input" onChange={handleLocker03} type="number" />
    </InputGroup>
    </Form>
    <br />
    <div id="error-txt" style={{ display: "none" }}>
        Locker combo is incorrect or blank! (Hmm, maybe you changed it to something else?)
    </div>

            </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" type="button" onClick={handleClose}>
            Close
        </Button>
          <Button variant="danger" onClick={handleLocker}>
            Lets go!
          </Button>
        </Modal.Footer>
      </Modal>

    
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>ms. zephra says, "hi, livy!"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <center><iframe src="https://giphy.com/embed/fucCaa49DPTn4oONvT" width="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></center>
        <br />Ms. Zephra was your homeroom teacher last year as well. She smiles warmly. "How are you and your girlfriend?"<br /><br />

        "We're great," you say. The two of you have been dating since <b>2/16/2021</b>. You even set the date as your locker combination. Very high school of you.<br /><br />


        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose2}>
            Say Goodbye
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>your locker.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Your jacket hangs on a hook to the left. There are a few books.
        <br /><br />
        On Page 20 of Juliet Takes A Breath, there's a slip of paper you're using as a bookmark:<br /><br />
        <center><img src={superstore} width="400px" /></center>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" type="button" onClick={handleClose3}>
            Close
        </Button>
          <Button variant="danger" onClick={handleClose3}>
            Lets go!
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Homeroom;
