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
  import dgb from './dgb-01.png';
  
  function Radio() {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className="radio">
          <Container className="listen">
              <center><img src={dgb} alt="dgb" width="250px" /><br />
              <p style={{color: "#e5fd6b" }}>you're president of the radio club so you come here whenever you want.</p></center>
              <iframe src="https://open.spotify.com/embed/playlist/63BjYkrMgfkCTNzecG45eX?theme=0" width="100%" height="250" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </Container>
  
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>(2 Unread) - babyandbabyy@yahoo.com</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          You want to check your <a href="http://mail.yahoo.com">Yahoo email</a> but wait... what was your password again? You haven't logged in all summer! After hitting 'Lost Password', you receive the following hint:
  <br /><br />
        <Alert variant="info">
        <b>Password:</b> Secret Word # 1 + Secret Word # 2 (no spaces, capitalization matters).
    </Alert>
  
    <small>Now that you think about it, you definitely wrote those down... somewhere?</small>
  
              </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" type="button" onClick={handleClose}>
              Close (And Gather Clues)
          </Button>
            <Button variant="danger" href="http://mail.yahoo.com">
              Go To Yahoo! Mail
            </Button>
          </Modal.Footer>
        </Modal>
  
      </div>
    );
  }
  
  export default Radio;
  