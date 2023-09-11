import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalBox from "../ModalBox/ModalBox";
import Forms from "../Forms/Forms";
import "./PricingCards.css";
const PricingCards = ({ numUsers }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <Row className="mb-3 text-center">
          <Col>
            <Card
              className={`mb-4 box-shadow ${
                numUsers > 0 && numUsers <= 10 ? "highlight-card" : ""
              }`}
            >
              <Card.Header className="h4">Free</Card.Header>
              <Card.Body>
                <Card.Title className="pricing-card-title">
                  $0 <small className="text-muted">/ mo</small>
                </Card.Title>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <Button variant="outline-primary" onClick={handleShow}>
                  Sign up for free
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className={`mb-4 box-shadow ${
                numUsers > 10 && numUsers <= 20 ? "highlight-card" : ""
              }`}
            >
              <Card.Header className="h4">Pro</Card.Header>
              <Card.Body>
                <Card.Title className="pricing-card-title">
                  $15 <small className="text-muted">/ mo</small>
                </Card.Title>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <Button variant="primary" onClick={handleShow}>
                  Get started
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className={`mb-4 box-shadow ${
                numUsers > 20 ? "highlight-card" : ""
              }`}
            >
              <Card.Header className="h4">Enterprise</Card.Header>
              <Card.Body>
                <Card.Title className="pricing-card-title">
                  $29 <small className="text-muted">/ mo</small>
                </Card.Title>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <Button variant="primary" onClick={handleShow}>
                  Contact us
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ModalBox
        show={show}
        onHide={handleClose}
        title="Connect With Us"
        content={<Forms handleClose={handleClose} />}
      />
    </>
  );
};

export default PricingCards;
