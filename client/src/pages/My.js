/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Navbar from '../components/Navbar'
const My = () => {
  return (
    <>
     <div>
     <Navbar/>
    <section id='myNav' > 
    <div id='blue'></div>
    <div id='white'></div>
    </section>

   <section id='profile'>
   <div id='myProfile'>
     <span className='avatar'></span>
      <div id='data'>
      <h2>1</h2>
      <div id='id'>
        Mob:<span>7905321205</span>,
       ID:<span>232112</span>
      </div>
      </div>

      <span className='info'></span>
      <div id='myProfileButton'>
    <button>Change Nick Name</button>
    <button>Change Password</button>
   </div>
   
   </div>
 
   </section>

   <section className='myList'>
     <div className='list'>
     <span className='icon orderIcon'></span>
     <span className='txt'>Order Record</span>
     <span className='arrow'></span>
     </div>
     <div className='list'>
     <span className='icon financialDetails'></span>
     <span className='txt'>Financial Details</span>
     <span className='arrow'></span>
     </div>
   </section>

   <div className='breakLine2'></div>

   <section className='myList'>
     <div className='list'>
     <span className='icon download'></span>
     <span className='txt'>Download</span>
     <span className='arrow'></span>
     </div>
     <div className='list'>
     <span className='icon followUs'></span>
     <span className='txt'>Follow us</span>
     <span className='arrow'></span>
     </div>
     <div className='list'>
     <span className='icon support'></span>
     <span className='txt'>Support</span>
     <span className='arrow'></span>
     </div>
     <div className='list'>
     <span className='icon complaint'></span>
     <span className='txt'>Complaint</span>
     <span className='arrow'></span>
     </div>
   </section>

   <div className='breakLine2'></div>

   <span id='signOut'>Sign Out</span>
     </div>
    </>
  )
}

export default My