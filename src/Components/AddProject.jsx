import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../Services/allAPI';
function AddProject() {
  const [show, setShow] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
  })
  const [preview,setPreview] = useState("")
  const [token,setToken] = useState("")
  useEffect(()=>{
    if(projectDetails.projectImage){
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
  },[projectDetails.projectImage])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }else{
      setToken("")
    }
  },[])
  const handleAdd = async (e)=>{
    e.preventDefault()
    const {title,languages,overview,github,website,projectImage} = projectDetails
   if(!title || !languages || !overview || !github || !website || !projectImage){
    toast.warning("Please fill the form completely!")
   }else{
    const reqBody = new FormData()
    reqBody.append("title",title)
    reqBody.append("languages",languages)
    reqBody.append("overview",overview)
    reqBody.append("github",github)
    reqBody.append("website",website)
    reqBody.append("projectImage",projectImage)

   if(token){
      reqHeader = {
      "Content-Type":"multipart/form-data",
      "Authorization":`Bearer ${token}`
    }
   }

    const result = await addProjectAPI(reqBody,reqHeader)
    console.log(result);
    if(result.status === 200){
      console.log(result.data);
    }else{
      console.log(result);
      console.log(result.response.data);
    }
   }
  }

  const handleClose = () =>{ 
    setShow(false)
    setProjectDetails({
      title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
    })
    setPreview("")
  };
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
                <input type="file" style={{ display: 'none' }} onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} />
                <img className='img-fluid' src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehCy-Ud1m5_zpQLEJPUaEjnHBKo7Qv8adxzci9YWob7FEz1TKlDpFG1-jhY6sxRQkdf0&usqp=CAU"} alt="project-picture" />

              </label>            </div>
            <div className="col-lg-6">
              <div className='mb-3'><input type="text" className="form-control" placeholder='Project Title' value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} /> </div>
              <div className='mb-3'> <input type="text" className="form-control" placeholder='Language Used'value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} /> </div>
              <div className='mb-3'> <input type="text" className="form-control" placeholder='Github Link' value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} /> </div>
              <div className='mb-3'><input type="text" className="form-control" placeholder='Website Link' value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} /> </div>
              <div className='mb-3'><input type="text" className="form-control" placeholder='Project Overview' value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} /> </div>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' autoClose={2000} theme='colored' />

    </>
  )
}

export default AddProject