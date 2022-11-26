import React from 'react';
import './styles.css';
import Image from '../../assets/dante-copa.jpg';
import { Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <Row>
      <Col>
        <header className='pepe-header mt-5'>
          <h1>Prode Pepillos 2022</h1>
        </header>
      </Col>
    </Row>
  );
}

export default Header;
