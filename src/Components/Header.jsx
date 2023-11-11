import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-body-tertiary position-fixed top-0 w-100">
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration:'none', color:'black'}} className='fw-bolder fs-4'><i className='fa-brands fa-stack-overflow me-2'></i>Project Fair</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header