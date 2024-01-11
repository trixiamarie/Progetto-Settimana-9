import React from 'react';
import { Container, Dropdown } from 'react-bootstrap';

export default function TVShowsHeader() {
  return (
    <Container fluid className="d-flex justify-content-between text-white bg-dark m-0 px-4">
      <div className="d-flex">
        <h2 className="mb-4">TV Shows</h2>
        <Dropdown className="ps-4 ml-4 mt-1">
          <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: '#221f1f' }}>
            Genres &nbsp;
          </Dropdown.Toggle>
          <Dropdown.Menu className="bg-dark">
            <Dropdown.Item className="text-white bg-dark" href="#">
              Comedy
            </Dropdown.Item>
            <Dropdown.Item className="text-white bg-dark" href="#">
              Drama
            </Dropdown.Item>
            <Dropdown.Item className="text-white bg-dark" href="#">
              Thriller
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Container>
  );
}
