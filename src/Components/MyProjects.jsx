import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { deleteProjectAPI, userProjectAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectResponseContext, editProjectResponseContext } from '../Contexts/ContextShare';
import { Alert } from 'react-bootstrap';
import EditProject from './EditProject';
function MyProjects() {
    const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)
    const {addProjectResponse,setAddProjectResponse} = useContext(addProjectResponseContext)
    const [userProjects,setUserProjects] = useState([])
    const getUserProjects = async ()=>{
        if(sessionStorage.getItem('token')){
            const token = sessionStorage.getItem('token')
            const reqHeader = {
                "Content-Type": "application/json","Authorization":`Bearer ${token}`
              }
            const result = await userProjectAPI(reqHeader)
            if(result.status===200){
                setUserProjects(result.data)
            }else{
                console.log(result);
                toast.warning(result.response.data)
            }
        }
    }
    useEffect(()=>{
        getUserProjects()
    },[addProjectResponse,editProjectResponse])

    const handleDelete = async ()=>{
        const token = sessionStorage.getItem('token')
        const reqHeader = {
            "Content-Type": "application/json","Authorization":`Bearer ${token}`
          }
          const result = await deleteProjectAPI(id,reqHeader)
          if(result.status === 200){
            // page reload
            getUserProjects()
          }else{
            toast.error(result.response.data)
          }
    }
  return (
    <div className='card shadow p-3'>
        <div className="d-flex">
            <h4 style={{height:'30px'}}>My Projects</h4>
            <div className="ms-auto">
                <AddProject />
            </div>
            </div>
            {
                addProjectResponse.title ? <Alert dismissible className='m-2'><span className='fw-bolder text-danger'>{addProjectResponse.title}</span> added successfully!</Alert>:null
            }
        <div className="mt-4">
            { userProjects?.length>0?userProjects.map(project=>(
                <div className="border d-flex align-items-center mb-2 rounded p-2">
                <h5 className='fw-bold'>{project.title}</h5>
                <div className="icon ms-auto d-flex">
                    <EditProject project={project} />
                    <a href ={project.github} target="_blank" className='btn'><i className="fa-brands fa-github"></i></a>
                    <button onClick={()=>handleDelete(project._id)} className='btn'><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
            )):
            <p className='text-danger fw-bolder'>No Projects Uploaded!</p>}
        </div>
        <ToastContainer position='top-right' autoClose={2000} theme='colored' />

    </div>
  )
}

export default MyProjects