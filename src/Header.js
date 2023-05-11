import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function Header() {
  return (
    <div>

<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/res.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        
            <strong className='p-3 mt-5'>Hotel Continentel</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header