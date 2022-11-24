import React from 'react';

function TabNav() {
  return (
    <Col sm={3}>
      <Nav variant='pills' className='flex-column'>
        <Nav.Item>
          <Nav.Link eventKey='first'>Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='second'>Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  );
}

export default TabNav;
