import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function SettingsPage() {

  return (
    <div className="container-fluid bg-white">
      <Container className="settings text-black p-5 bg-white">
        <Row>
          <h1>Account</h1>
          <hr />
        </Row>
        <Row>
          <Col xs={3}>
            <p className="text-secondary">MEMBERSHIP & BILLING</p>
            <Button className="border border-0 bg-secondary text-white px-4">
              Cancel Membership
            </Button>
          </Col>
          <Col xs={9}>
            <div className="d-flex justify-content-between">
              <div>
                <p className="fw-bold">student@strive.school</p>
                <p className="text-secondary">Password:******</p>
                <p className="text-secondary">Phone: 321 044 1279</p>
              </div>
              <div className="text-end">
                <p>
                  <a href="#p">Change Account</a>
                </p>
                <p>
                  <a href="#p">Change Password</a>
                </p>
                <p>
                  <a href="#p">Change Phone number</a>
                </p>
              </div>
            </div>
            <hr />
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col xs={9} offset={3}>
            <div className="d-flex justify-content-between">
              <div>
                <p>
                  <img
                    src="./assets/paypal-logo-black-and-white.png"
                    style={{ width: 'auto', height: '1.5rem' }}
                    alt="Paypal Logo"
                  />
                  admin@strive.school
                </p>
              </div></div></Col>
              <Col>
              <div className="text-end">
                <a href="#p">
                  <p>Update payment info</p>
                </a>
                <a href="#p">
                  <p>Billing details</p>
                </a>
              </div>
            
            <hr />
          </Col>
        </Row>
        
        <Row>
          <Col xs={3}>
            <p className="text-secondary">PLAN DETAILS</p>
          </Col>
          <Col xs={6} className="fw-bold">
            <p>Premium ULTRA HD</p>
          </Col>
          <Col xs={3} className="text-end text-info">
            <a href="#p">
              <p>Change plan</p>
            </a>
          </Col>
          <hr />
        </Row>
        <Row>
          <Col xs={3}>
            <p className="text-secondary">SETTINGS</p>
          </Col>
          <Col xs={9} className='text-end'>
            <a href="#p">
              <p>Parental Controls</p>
            </a>
            <a href="#p">
              <p>Test participation</p>
            </a>
            <a href="#p">
              <p>Manage download devices</p>
            </a>
            <a href="#p">
              <p>Activate a device</p>
            </a>
            <a href="#p">
              <p>Recent device streaming activity</p>
            </a>
            <a href="#p">
              <p>Sign out of all devices</p>
            </a>
          </Col>
          <hr />
        </Row>
        <Row>
          <Col xs={3}>
            <p className="text-secondary">MY PROFILE</p>
          </Col>
          <Col xs={6}>
            <div className="d-flex align-items-center">
              <a href="#p">
                <img src="./assets/avatar.png" style={{ width: '50px' }} alt="Avatar" />
              </a>
              <p className="ps-3 fw-bold">Strive Student</p>
            </div>
          </Col>
          <Col xs={3} className="text-end">
            <a href="#p">
              <p>Manage profiles</p>
            </a>
            <a href="#p">
              <p>Add profile email</p>
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={3} offset={3}>
            <a href="#p">
              <p>Language</p>
            </a>
            <a href="#p">
              <p>Playback settings</p>
            </a>
            <a href="#p">
              <p>Subtitle appearance</p>
            </a>
          </Col>
          <Col xs={3} offset={2}>
            <a href="#p">
              <p>Viewing activity</p>
            </a>
            <a href="#p">
              <p>Ratings</p>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


