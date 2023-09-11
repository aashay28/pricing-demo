import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <img
              className="mb-2"
              src="/bootstrap-solid.svg"
              alt=""
              width="24"
              height="24"
            />
            <small className="d-block mb-3 text-muted">© 2017-2018</small>
          </Col>
          <Col xs={6} md={3}>
            <div className="h5">Features</div>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <div className="h5">Resources</div>

            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <div className="h5">About</div>

            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Terms
                </a>
              </li>
              {/* Add more list items as needed */}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
