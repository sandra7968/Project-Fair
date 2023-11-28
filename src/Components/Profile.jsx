import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editUserAPI } from '../Services/allAPI';
function Profile() {
    const [open, setOpen] = useState(false);
    const [userProfile,setUserProfile] = useState({
        username:"",email:"",password:"",profile:"",github:"",linkedin:""
    })
    const [existingImage,setExisitingImage] = useState("")
    const [preview,setPreview] = useState("")
    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem('existingUser'))
        setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,profile:"",github:user.github,linkedin:user.linkedin})
        setExisitingImage(user.profile)
        // if(user.profile!==""){
        //     setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,profile:"",github:user.github,linkedin:user.linkedin})
        //     setExisitingImage(user.profile)
        // }else{
        //     setExisitingImage("https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-8110250-6515859.png?f=webp")
        // }
       
    },[open])

    useEffect(()=>{
        if(userProfile.profile){
            setPreview(URL.createObjectURL(userProfile.profile))
        }else{
            setPreview("")
        }
    },[userProfile.profile])

    const handleProfileUpdate = async ()=>{
        const {username,email,password,profile,github,linkedin} = userProfile
        if(!github || !linkedin){
            toast.info("Please fill the form completely!")
        }else{
            const reqBody = new FormData()
            reqBody.append("username",username)
            reqBody.append("email",email)
            reqBody.append("password",password)
            reqBody.append("github",github)
            reqBody.append("linkedin",linkedin)
            preview?reqBody.append("profileImage",profile):reqBody.append("profileImage",existingImage)
            const token = sessionStorage.getItem('token')
            if(preview){
                const reqHeader = {
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${token}`
                  }
                  const res = await editUserAPI(reqBody,reqHeader)
                  if(res.status === 200){
                    setOpen(!open)
                    sessionStorage.setItem('existingUser',JSON.stringify(res.data))
                  }else{
                    setOpen(!open)
                    console.log(res);
                    console.log(res.response.data);
                  }
            }else{
                const reqHeader = {
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                  }
                  const res = await editUserAPI(reqBody,reqHeader)
                  if(res.status === 200){
                    setOpen(!open)
                    sessionStorage.setItem('existingUser',JSON.stringify(res.data))
                  }else{
                    setOpen(!open)
                    console.log(res);
                    console.log(res.response.data);
                  }
        }
    }}
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
                    {   
                        existingImage!==""?
                        <img  width={'150px'} height={'150px'} className='rounded-circle bg-dark' src={preview?preview:`${BASE_URL}/uploads/${existingImage}`} alt="upload picture" /> :
                        <img  width={'150px'} height={'150px'} className='rounded-circle bg-dark' src={preview?preview:`https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-8110250-6515859.png?f=webp`} alt="upload picture" /> 
                    }
                </label>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='GitHub Link' value={userProfile.github} onChange={e=>setUserProfile({...userProfile,github:e.target.value})} />
                </div>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='LinkedIn' value={userProfile.linkedin} onChange={e=>setUserProfile({...userProfile,linkedin:e.target.value})} />
                </div>
                <div className="mt-3 text-center d-grid">
                    <button className='btn btn-warning' onClick={handleProfileUpdate}>Update</button>
                </div>
            </div>
        </Collapse>
        <ToastContainer position='top-right' autoClose={2000} theme='colored' />

    </div>
  )
}

export default Profile