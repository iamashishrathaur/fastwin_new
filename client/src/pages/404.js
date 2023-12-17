import React from 'react'
import {useNavigate} from 'react-router-dom';

const PageNotFound = () => {

  const navigate = useNavigate();

  const handleClick=()=>{
      navigate('/')
   }
  return (
    <>
    <div id='errorNav'> <span onClick={handleClick }></span> </div>
    <img id='errorImg' src="/error_404.svg" alt=""  />
    </>

  )
}

export default PageNotFound