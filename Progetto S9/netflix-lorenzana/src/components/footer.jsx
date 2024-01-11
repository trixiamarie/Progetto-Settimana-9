import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

export default function MyFooter() {
  return (
    <footer>
      <Container fluid className="text-center text-secondary bg-dark">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-left mb-2">
            <i className="fa fa-facebook footer-icon"></i>
            <i className="fa fa-instagram footer-icon"></i>
            <i className="fa fa-twitter footer-icon"></i>
            <i className="fa fa-youtube footer-icon"></i>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Audio and Subtitles</a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Media Center</a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Privacy</a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Contact us</a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Audio Description</a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Investor Relations</a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Legal Notices</a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Help Center</a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Jobs</a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Cookie Preferences</a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs={12} className="footer-links">
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Gift Cards</a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Terms of Use</a>
                </p>
                <p>
                  <a className="text-decoration-none text-white" href="#placeholder" alt="footer link">Corporate Information</a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-left mb-2">
            <Button variant="outline-secondary" size="sm" className="rounded-0 mt-3">
              Service Code
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-left mb-2 mt-2 copyright">
            © 1997-2022 Netflix, Inc.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
