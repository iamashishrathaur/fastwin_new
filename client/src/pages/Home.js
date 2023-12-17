import React from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <>
    <div>
    <Navbar/>
    <section id='HomeTop'>
     <div className='info'>
     <h4>Balance</h4>
       <div className="amount">
        ₹<h2>234.00</h2>
       </div> 
      <div className="id">
      ID: <h5>12345</h5>
        </div>
     </div>
     <div id='button'>
      <button>Recharge</button>
      <button>Withdraw</button>
     </div>
   </section>
   
   <section id='HomeReward'>
     <div >
       <img src='/TaskR.png' alt='' className='homeIcon'/>
       <h4>Task reward</h4>
     </div>
     <div >
      <img src='/CheckR.png' alt='' className='homeIcon'/>
       <h4>Check in</h4>
     </div>
   </section>
   <section id='HomeReferBanner'>
    <img src='/refer_bn.svg' alt='refer'></img>
   </section>
 
   <section id='HomeGame'>
    <img src='/fast-parity.jpg' alt='fast-parity'/>
    <img src='/parity.jpg' alt='parity'/>
    <img src='/sapre.jpg' alt='sapre'/>
    <img src='/dice.jpg' alt='dice'/>
    <img src='/AnB.jpg' alt='AnB'/>
    <img src='/wheel.png' alt='wheel'/>
    <img src='/MineSweeper.png' alt='MineSweeper'/>
    <img src='/jetx.png' alt='jetx'/>
    <img src='/ludo.png' alt='ludo'/>
   </section>
   
   </div> 
    </>
  )
}

export default Home