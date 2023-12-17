import React from 'react'
const Login = () => {

  function handleInput(){

  }
function createAccount(){

}
function forgotPassword(){

}
// function handleLogin(){

// }
  return (
    <>
    <div>
      <section id='logNav' className='top-nav'>
       <div className='logback'><span></span>  <h3>Login</h3></div>
       
      </section>

      <section id='logHero'>
        <img src='https://fastwin.app/includes/images/logo.png' alt='Logo' height={56}></img>
      </section>
      <section id='logInput'>
        <div className='inpLog input-box' >
        <span className='cell'></span>
          <input
            type='text'
            name='mobile'
            id='mobile'
            placeholder='Mobile Number'
            maxLength={10}
            onChange={handleInput}
          />
        </div>
        <div className='inpLog input-box'>
          <span className='lock'></span>
          <input
            type='password' // Set input type to password for security
            name='password'
            id='password'
            placeholder='Password (≥6 characters)'
            maxLength={15}
            onChange={handleInput}
          />
        </div>
      </section>
      <section id='logButton'>
        {/* <button style={buttonStyles} onClick={handleLogin}>
          {loading ?  <Loader/>: 'Login'}
        </button> */}
        <button>
          Login
        </button>
      </section>
      <section id='logButtons'>
        <div className="logbtn"><button onClick={createAccount}>Create an account</button></div>
        <div className="logbtn"> <button onClick={forgotPassword}>Forgot Password?</button></div>
      </section>
    </div>
     
    </>
  )
}

export default Login