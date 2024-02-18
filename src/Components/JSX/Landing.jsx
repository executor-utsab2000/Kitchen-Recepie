import React from 'react';
import landingStyles from '../ModuleSCSS/Landing.module.scss'
// import 'animate.css';

const Landing = () => {
    return (
    <>
    <div className="container-fluid ">
      <div className="row px-0">
        <div className="col-12 px-0">
          <div className={landingStyles.mainBg}>
            <div className={landingStyles.blackBgOverlay}></div>
            <div className="row" style={{position:'absolute'}}>
              <div className="col-12 px-0">
                  <p className="animate__animated animate__backInDown">Welcome</p>  
                  <p className="animate__animated animate__backInDown animate__delay-1s">to</p>
                  <p className="animate__animated animate__backInDown animate__delay-2s">Recipie Corner</p>
                  <p className="animate__animated animate__backInDown animate__delay-3s">( A complete home of all kind of recipies )</p>
                  <p className={`animate__animated animate__backInDown animate__delay-4s ${landingStyles.lastP}`}>
                    <img src="Images/remove.png" alt="" className='img-fluid' />
                    by Utsab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    
      
    
    
    </>
  )
}

export default Landing
