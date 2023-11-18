import React from 'react'
import AddProject from './AddProject'
function MyProjects() {
  return (
    <div className='card shadow p-3'>
        <div className="d-flex">
            <h4 style={{height:'30px'}}>My Projects</h4>
            <div className="ms-auto">
                <AddProject />
            </div>
            </div>
        <div className="mt-4">
            <div className="border d-flex align-items-center rounded p-2">
                <h5>Project Title</h5>
                <div className="icon ms-auto">
                    <button className='btn'><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className='btn'><i className="fa-brands fa-github"></i></button>
                    <button className='btn'><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
            <p className='text-danger fw-bolder'>No Projects Uploaded!</p>
        </div>
    </div>
  )
}

export default MyProjects