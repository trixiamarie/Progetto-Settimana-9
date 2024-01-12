import React, { Component } from "react";
import './gallery.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

class ProfilePage extends Component {
  render() {
    return (
      <Container fluid className="p-5 bg-dark text-white">
        <Row className="m-auto" style={{ maxWidth:"35rem"}}>
          <h1 className="text-white p-0">Edit Profile</h1>
          <hr />
        </Row>
        <Row className="m-auto" style={{ maxWidth:"35rem"}}>
          <Col xs={3} sm={3} className="text-end p-0">
            <Card className="text-bg-dark">
              <Card.Img src="../assets/avatar.png" style={{ width: '8rem', height: 'auto' }} />
            </Card>
          </Col>
          <Col xs={9} sm={9} className="px-4">
            <p className="bg-secondary px-3 py-2">Strive Student</p>
            <p>Language</p>
            <Form.Select className="lang">
              <option>English</option>
              <option>Italian</option>
              <option>French</option>
            </Form.Select>
            <hr />
          </Col>
        </Row>
        <Row className="m-auto" style={{ maxWidth:"35rem"}}>
          <Col className="offset-3 px-4">
            <p>Maturity Settings</p>
            <Form.Select className="lang bg-secondary">
              <option>ALL MATURITY RATINGS</option>
              <option>18+</option>
              <option>PARENT CONTROL</option>
            </Form.Select>
            <p>Show titles of all maturity ratings for this profile.</p>
            <Button>EDIT</Button>
            <hr />
          </Col>
        </Row>
        <Row className="m-auto" style={{ maxWidth:"35rem"}}>
          <Col className="offset-3 px-4">
            <p>Autoplay Controls</p>
            <Form.Check type="checkbox" id="flexCheckDefault" label="Autoplay next episode in a series on all devices." />
            <Form.Check
              type="checkbox"
              id="flexCheckChecked"
              label="Autoplay previews while browsing on all devices."
              defaultChecked
            />
          </Col>
          <hr />
        </Row>
        <Row className="m-auto" style={{ maxWidth:"35rem"}}>
          <Col className="d-flex justify-content-between">
            <a href="#placeholder">
              <Button className="my-3 px-4 py-2">SAVE</Button>
            </a>
            <a href="#placeholder">
              <Button className="my-3 px-4 py-2">CANCEL</Button>
            </a>
            <a href="#placeholder">
              <Button className="my-3 px-4 py-2">DELETE PROFILE</Button>
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfilePage;
