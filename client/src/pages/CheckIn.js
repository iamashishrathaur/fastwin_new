import React from 'react'
import { useNavigate } from 'react-router-dom'

const CheckIn = () => {
  const navigate = useNavigate();
  return (
    <>
    <section id='checkNav' className='top-nav'>
    <div className='checkBack' onClick={()=>{navigate(-1)}}> 
         <span className='back'></span>
    </div> 
    <div className='checkHead'> Check In</div>
    </section> 
    <section id='checkBody'>

    <div id='checkBox'>
     <div className='check-row'>
     <div className='day'>
         <span>Day 1</span>
         <span>Day 2</span>
         <span>Day 3</span>
         <span>Day 4</span>  
      </div>

       <div className='coin'>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
       </div>
       <div className='money'>
         <span>+1</span>
         <span>+1</span>
         <span>+1</span>
         <span>+1</span>
       </div> 

     </div>
     <div className='check-row'>
     <div className='day'>
         <span>Day 1</span>
         <span>Day 2</span>
         <span>Day 3</span>
         <span>Day 4</span>  
      </div>
      {/* <br /> */}
       <div className='coin'>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
       </div>
       <div className='money'>
         <span>+1</span>
         <span>+1</span>
         <span>+1</span>
         <span>+1</span>
       </div> 

     </div>
     <div className='check-button'>
       <button>Check In</button>
     </div> 
    
    </div>
      <p>Check in for 7 consecutive days to get treasure box and receive mysterious prizes! .</p>
      <img src='https://fastwin.app/includes/images/Treasure_b.png' alt=''/>
    </section>
    </>
  )
}

export default CheckIn