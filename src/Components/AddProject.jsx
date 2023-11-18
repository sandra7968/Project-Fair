import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
        <Button variant="success" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
            <div className="col-lg-6">
<label>
                   <input type="file" style={{display:'none'}}/>
                    <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehCy-Ud1m5_zpQLEJPUaEjnHBKo7Qv8adxzci9YWob7FEz1TKlDpFG1-jhY6sxRQkdf0&usqp=CAU" alt="project-picture" />
    
</label>            </div>
            <div className="col-lg-6">
               <div className='mb-3'><input type="text" className="form-control" placeholder='Project Title' /> </div>
              <div className='mb-3'> <input type="text" className="form-control" placeholder='Language Used' /> </div>
              <div className='mb-3'> <input type="text" className="form-control" placeholder='Github Link' /> </div>
               <div className='mb-3'><input type="text" className="form-control" placeholder='Website Link' /> </div>
               <div className='mb-3'><input type="text" className="form-control" placeholder='Project Overview' /> </div>

             </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject