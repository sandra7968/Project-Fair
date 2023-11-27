import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseurl';

function Profile() {
    const [open, setOpen] = useState(false);
    const [userProfile,setUserProfile] = useState({
        username:"",email:"",password:"",profile:"",github:"",linkedin:""
    })
    const [existingImage,setExisitingImage] = useState("")
    const [preview,setPreview] = useState("")
    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem('existingUser'))
        if(user.profile!==""){
            setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,profile:"",github:user.github,linkedin:user.linkedin})
            setExisitingImage(user.profile)
        }else{
            setExisitingImage("https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-8110250-6515859.png?f=webp")
        }
       
    },[])

    useEffect(()=>{
        if(userProfile.profile){
            setPreview(URL.createObjectURL(userProfile.profile))
        }else{
            setPreview("")
        }
    })
  return (
    <div className='mt-5 '>
        <div className='d-flex border rounded p-3 justify-content-between'>
            <h2 style={{height:'50px'}}>Profile</h2>
            <button  onClick={() => setOpen(!open)} className='btn btn-outline-info'><i className="fa-solid fa-chevron-down"></i></button>
        </div>
        <Collapse in={open}>
            <div className="row shadow p-5 justify-content-center ">
                <label className='text-center' >
                    <input style={{display:'none'}} type="file" onChange={e=>setUserProfile({...userProfile,profile:e.target.files[0]})} />
                    <img  width={'150px'} height={'150px'} className='rounded-circle bg-dark' src={preview?preview:`${BASE_URL}/uploads/${existingImage}`} alt="upload picture" />
                </label>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='GitHub Link' value={userProfile.github} onChange={e=>setUserProfile({...userProfile,github:e.target.value})} />
                </div>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='LinkedIn' value={userProfile.linkedin} onChange={e=>setUserProfile({...userProfile,linkedin:e.target.value})} />
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