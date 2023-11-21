import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import registerPic from '../Assets/360_F_395263203_igjwyFhK5W4gG1tTzZwqS1TtRpZ0g0iF-removebg-preview.png'
import { Form } from 'react-bootstrap'
import { loginAPI, registerAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Auth({register}) {
    const navigate = useNavigate()
    const [userData,setUserData] = useState({
        username:"",email:"",password:""
    })
    const isRegisterForm = register?true:false
    const handleRegister = async (e)=>{
        e.preventDefault()
        const {username,email,password} = userData
        if(!username || !email || !password){
            toast.warning("Please fill the form completely!")
        }else{
            const result =  await registerAPI(userData)
            if(result.status===200){
                toast.success(`${result.data.username} has been registered successfully!`)
                setUserData({
                    username:"",email:"",password:""
                })
                navigate('/login')
            
            }else{
                toast.error(result.response.data)
                console.log(result);
            }
        }
    }

    const handleLogin = async (e)=>{
        e.preventDefault()
        const {email,password} = userData
        if(!email || !password){
            toast.warning("Please fill the form completely")
        }else{
            const result = await loginAPI(userData)
            if(result.status===200){
                sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token",result.data.token)

                setUserData({
                    email:"",password:""
                })
                navigate('/')
            }else{
                toast.error(result.response.data)
                console.log(result);
            }
        }
    }
  return (
    <div style={{width:'100%', height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div className='w-75 container'>
          <Link to={'/'} style={{textDecoration:'none'}}><i className='fa-solid fa-arrow-left me-1'></i> Back To Home</Link>  
          <div className="card shadow p-5 bg-primary">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src={registerPic} alt="Auth Image"  />
                </div>
                <div className="col-lg-6">
                    <div className="d-flex align-items-center flex-column">
                    <h1 className='fw-bold mt-2 text-light' style={{height:'60px'}}><i className='fa-brands fa-stack-overflow me-2'></i>Project Fair</h1>
                    <h5 className='fw-bolder mt-2 pb-3 text-light'>
                        {
                            isRegisterForm?"Sign Up":"Sign In"
                        }
                    </h5>
                    <Form className='text-light w-100'>
                        {
                            isRegisterForm && 
                            <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Username" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} />
                            </Form.Group>
                        }
                         <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="email" placeholder="Enter Email ID" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicpswd">
                            <Form.Control type="password" placeholder="Enter Password" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} />
                            </Form.Group>

                        {
                            isRegisterForm ? 
                            <div>
                                <button className='btn btn-light mb-2' onClick={handleRegister}>REGISTER</button>
                                <p>Already have an Account? <Link to={'/login'}>Login</Link></p>
                            </div> :
                            <div>
                            <button onClick={handleLogin} className='btn btn-light mb-2'>SIGN IN</button>
                            <p>New User? <Link to={'/register'}>Sign Up</Link></p>

                        </div>
                        }
                    </Form>
                    </div>
                </div>

            </div>
          </div>
      </div>
      <ToastContainer position='top-right' autoClose={2000} theme='colored' />
    </div>
  )
}

export default Auth