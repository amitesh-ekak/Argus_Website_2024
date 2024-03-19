import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import EkakLogo from './Assets/Ekak_Logo.png'


function NavigationBar() {
  return (
    <div>
        <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={EkakLogo}
              width="250"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
      
    </div>
  )
}

export default NavigationBar
