import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <div className='mt-5 '>
        <div className='d-flex border rounded p-3 justify-content-between'>
            <h2 style={{height:'50px'}}>Profile</h2>
            <button  onClick={() => setOpen(!open)} className='btn btn-outline-info'><i className="fa-solid fa-chevron-down"></i></button>
        </div>
        <Collapse in={open}>
            <div className="row shadow p-5 justify-content-center ">
                <label className='text-center' >
                    <input style={{display:'none'}} type="file" />
                    <img  width={'150px'} height={'150px'} className='rounded-circle bg-dark' src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-8110250-6515859.png?f=webp" alt="upload picture" />
                </label>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='GitHub Link' />
                </div>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='LinkedIn' />
                </div>
                <div className="mt-3 text-center d-grid">
                    <button className='btn btn-warning'>Update</button>
                </div>
            </div>
        </Collapse>
    </div>
  )
}

export default Profile