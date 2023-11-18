import React from 'react'
import Header from '../Components/Header'
import { Row, Col } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <>
      <Header insideDashboard />
      <Row style={{marginTop:'100px'}} className='container-fluid'>
       <Col sm={12} md={8}>
        <h2 style={{height:'50px'}}>Welcome <span className='text-warning'>User</span></h2>
        <MyProjects />
       </Col> 
       <Col sm={12} md={4}>
        <Profile />
       </Col> 
      </Row>
    </>
  )
}

export default Dashboard