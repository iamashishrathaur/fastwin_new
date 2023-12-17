import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const navigate= useNavigate();
  const [isChecked] = useState(true);
  function back(){

  }
  function handleInputChange(){

  }
  function handleRegister(){

  }

  return (
    <>
    <div>
    <section id='regNav' className='top-nav'>
      <div className='regBack'> 
      <span onClick={back}></span>
      <h3>Register</h3>
      </div>
    </section>
    <section id='regHero'>
      <img src='https://fastwin.app/includes/images/logo.png' alt=''></img>
    </section>
    <section id='regInfo'>
      <div className='infoBox'>
      <img alt='' className='cell'/>
      
      <h3>+91</h3>
      <input type='text' name='mobile' id='mobile' placeholder='Mobile Number' maxLength={10} 
        onChange={handleInputChange}/>
      </div>
      <div className='infoBox'>
      <img  alt='' className='lock'/>
      <input type='text'  name='password' id='password' placeholder='Login Password (≥6 characters)' maxLength={15} 
        onChange={handleInputChange} />
      </div>
      <div className='infoBox'>
      <img  alt='' className='lock'/>
      <input type='text' name='confirmPassword' placeholder='Confirm Login Password' maxLength={15}  
      onChange={handleInputChange}/>
      </div>
      <div className='infoBox'>
      <img  alt='' className='recommendation'/>
      <input type='text' id='invite' name='invite' placeholder='invite Code' maxLength={20} 
        onChange={handleInputChange}/>
      </div>
      <div className='infoBox'>
      <img  alt='' className='key'/>
      <input type='text' name='otp' placeholder='OTP' maxLength={6} 
      onChange={handleInputChange}/>
      <button>OTP</button>
      </div>
    </section>
    <section id='regButton'> 
    <button onClick={handleRegister} >Register
    {/* { loading ?  <Loader/>: 'Register'} */}
    
    </button>
    </section>
     <section id='regLogin'>
    <h3>Already have an account? <span onClick={()=>{navigate("/login")}}>Log in</span></h3>
     </section>
     <section id='regPrivacy'>
      <input type='checkbox' defaultChecked={isChecked}/>
      <h3>I agree <span>PRIVACY POLICY</span></h3>
     </section>
  
    </div>
    </>
  )
}

export default Register