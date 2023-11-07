import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex flex-column justify-content-center align-items-center bg-dark text-light mt-5'>
    <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
     <div className="website" style={{width:'400px'}}>
       <h4 style={{height:'30px'}}><i className='fa-brands fa-stack-overflow me-2'></i>Project Fair</h4>
            <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
            <h6>Code licensed Luminar, docs CC BY 3.0.</h6>
            <p>Currently v5.3.2.</p>
            </div>
            <div className="links d-flex flex-column">
             <h4 style={{height:'30px'}} className='mb-3'>Links</h4>
             <Link to={'/'} style={{textDecoration:'none', color:'black'}}>Home</Link>
             <Link to={'/cart'} style={{textDecoration:'none', color:'black'}}>Login</Link>
             <Link to={'/wishlist'} style={{textDecoration:'none', color:'black'}}>Register</Link>
            </div>
            <div className="guides d-flex flex-column">
             <h4 style={{height:'30px'}} className='mb-3'>Guides</h4>
            <Link to={'/'} style={{textDecoration:'none', color:'black'}}>React</Link>
             <Link to={'/'} style={{textDecoration:'none', color:'black'}}>React Bootstrap</Link>
             <Link to={'/'} style={{textDecoration:'none', color:'black'}}>Routing</Link>
            </div>
            <div className="contact">
             <h4 style={{height:'30px'}} className='mb-3'>Contact Us</h4>
             <div className='sub d-flex mt-3'>
               <input className='form-control' type="text" placeholder='Enter your Email ID' />
               <button className='btn btn-primary ms-3 w-50'>Subscribe</button>
             </div>
            <div className='icons fs-4 d-flex justify-content-evenly mt-3'>
               <Link to={'/'} style={{textDecoration:'none', color:'black'}}><i className='fa-solid fa-envelope'></i></Link>
               <Link to={'/'} style={{textDecoration:'none', color:'black'}}><i className='fa-brands fa-twitter'></i></Link>
               <Link to={'/'} style={{textDecoration:'none', color:'black'}}><i className='fa-brands fa-linkedin'></i></Link>
               <Link to={'/'} style={{textDecoration:'none', color:'black'}}><i className='fa-brands fa-instagram'></i></Link>
               <Link to={'/'} style={{textDecoration:'none', color:'black'}}><i className='fa-brands fa-github'></i></Link>
               <Link to={'/'} style={{textDecoration:'none', color:'black'}}><i className='fa-brands fa-facebook'></i></Link>
            </div>
            </div>
            </div> 
            <p>Copyright © 2023 Project Fair. Built with React.</p>
   </div>
  )
}

export default Footer