import React from 'react'
import './Contact.css'
import images from '../../constants/images';

const Contact = () => {
  return (
    <div className='contactpage'>
    <div className='image'>
         <img src={images.one} alt="contact image" width={600} height={500}/>
    </div>
    <div className='register'>
        <span className="registerTitle">Contact Us</span>
      <form className="registerForm">
      <label> Name</label>
        <input type='text' placeholder='Enter Name'/>
        <label>Email Id</label>
        <input type='text' placeholder='Enter your Email Id'/>
        <label>Contact No</label>
        <input type='password' placeholder='Enter contact no'/>
        <button className="registerButton">Submit</button>
        <p className='registersentence'> We wil reach out to you soon..</p>
      </form>
    </div>
    </div>
  )
}

export default Contact
