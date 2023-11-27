import React, { useContext } from 'react'
import { Navbar, Container,Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Contexts/TokenAuth'

function Header({insideDashboard}) {
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)

  const navigate = useNavigate()
  const handleLogout = ()=>{
    // remove all existing user details from browser
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    // navigate to landing page
    navigate('/')
  }
  return (
    <Navbar className="bg-body-tertiary position-fixed top-0 w-100">
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration:'none', color:'black'}} className='fw-bolder fs-4'><i className='fa-brands fa-stack-overflow me-2'></i>Project Fair</Link>
          </Navbar.Brand>
          {  insideDashboard &&
            <div className='btn btn-linkms-auto text-primary fw-bolder fs-5'>
            <Button onClick={handleLogout}>Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></Button>
          </div>}
        </Container>
      </Navbar>
  )
}

export default Header