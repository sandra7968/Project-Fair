import React, { useEffect, useState } from 'react'
import { Row, Col} from 'react-bootstrap'
import titleImage from '../Assets/team_people_work_icon_176863.png'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
const [isLoggedin,setIsLoggedin] = useState(false)
  useEffect(()=>{
  if(sessionStorage.getItem("token")){
  setIsLoggedin(true)
  }else{
  setIsLoggedin(false)}
  },[])
  return (
    <>
      <div style={{width:'100%', height:'100vh', backgroundColor:'silver'}} className='container-fluid rounded'>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 className='fw-bold mb-5' style={{height:'60px'}}><i className='fa-brands fa-stack-overflow me-2'></i>Project Fair</h1>
            <p>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!</p>
            { isLoggedin ?
            <Link to={'/dashboard '} className='btn btn-warning'>Manage Your Projects<i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>
            :
            <Link to={'/login '} className='btn btn-warning'>Start to Explore<i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>
            }

          </Col>
          
          <Col sm={12} md={6}>
           <img style={{marginTop:'60px',marginLeft:'50px'}} className='' src={titleImage} alt="" />
          </Col>
        </Row>
      </div>
      <div className="all-projects mt-5">
        <h1 className='text-center mb-5' style={{height:'60px'}}>Explore Our Projects</h1>
       <marquee scrollAmount={25}>
          <div className='d-flex justify-content-between'>
            <div style={{width:'500px'}}>
              <ProjectCard />
            </div>
          </div>
       </marquee>
       <div className="text-center mt-5"><Link to={'/projects'}>View More Projects</Link></div>
      </div>
    </>
  )
}

export default Home