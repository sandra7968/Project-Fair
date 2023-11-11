import React, { useState }  from 'react'
import { Card,Modal,Row,Col } from 'react-bootstrap'
function ProjectCard() {
    
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <>
    <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <img style={{height:'200px'}} className='img-fluid' src="" alt="Project Image" />
                </Col>
                <Col md={6}>
                    <h2 style={{height:'60px'}}>Project Details</h2>
                    <p>Project Overview</p>
                    <p>Language Used: <span className='fw-bolder'></span></p>

                </Col>
            </Row>
            <div className="mt-3">
                        <a href="" target='_blank' className='me-3 btn'><i className='fa-brands fa-github fa-2x'></i></a>
                        <a href="" target='_blank' className='me-5 btn'><i className='fa-solid fa-link fa-2x'></i></a>

                    </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard
