import React from 'react'
import {useNavigate} from 'react-router-dom'
const FastParity = () => {
  const navigate= useNavigate();
  return (
    <>
      <section id='fastParityNav' className='top-nav'>
          <div className='back' onClick={()=>{navigate(-1)}}>
             <span className='backIcon'></span>
          </div>
             <span className='title'>Fast-Parity</span>
             <span className='rule'>Rule</span>
      </section>
      <section  className='game-col-1'>
          <div className='game-inform'>
            <div className='period-inform'>
              <span className='period-txt'>Period</span>
              <span className='period-number'>202312282524</span>
            </div>

            <div className='count-down'>
               <span className='count-txt'>Count Down</span>
              
              <div className='count-down-box'>
                <span className="boxs">0</span><span className="boxs">1</span>:<span className="boxs">1</span><span className="boxs">9</span>
              </div>
            </div>
            
          </div>
          <div className='game-btn'>
              <div className="color-btn">
                <div className="join green">
                  <span className='icon'></span>
                  <span className='txt'>Join Green</span>
                </div>
                <div className='color-bet-txt'>1:2</div>
              </div>
              <div className="color-btn">
                <div className="join violet">
                <span className='icon'></span>
                  <span className='txt'>Join Violet</span>
                </div>
                <div className='color-bet-txt'>1:4.5</div>
              </div>
              <div className="color-btn">
                <div className="join red">
                <span className='icon'></span>
                  <span className='txt'>Join Red</span>
                </div>
                <div className='color-bet-txt'>1:2</div>
              </div>
          </div>
          <div className='game-number'>
            <div className="num-box">
              <div className="jnum">1</div>
            </div>
            <div className="num-box">
              <div className="jnum">2</div>
            </div>
            <div className="num-box">
              <div className="jnum">3</div>
            </div>
            <div className="num-box">
              <div className="jnum">4</div>
            </div>
            <div className="num-box">
              <div className="jnum">5</div>
            </div>
            <div className="num-box">
              <div className="jnum">6</div>
            </div>
            <div className="num-box">
              <div className="jnum">7</div>
            </div>
            <div className="num-box">
              <div className="jnum">8</div>
            </div>
            <div className="num-box">
              <div className="jnum">9</div>
            </div>
            <div className="num-box">
              <div className="jnum">0</div>
            </div>
            <div className='number-bet-txt'>1:9</div>
          </div>
      </section>

    </>

  )
}

export default FastParity