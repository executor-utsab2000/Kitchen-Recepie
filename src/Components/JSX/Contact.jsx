import React from 'react'
import contactStyles from '../ModuleSCSS/Contact.module.scss';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <div className="container-fluid" style={{overflow:'hidden'}}>
                <div className="row">
                    <div className="col-lg-6 px-0">
                        <div className={contactStyles.bgAbout}>
                            <div className={contactStyles.blackBgOverlay}></div>
                            <span className="animate__animated animate__bounceInLeft">𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗠𝗲</span>
                        </div>
                    </div>
                    <div className={`col-lg-6 px-5  ${contactStyles.bgContent}`}>
                        <p className="animate__animated animate__backInDown">How to Get in Touch With Me ? </p>
                        <div className={contactStyles.underlineTop}></div>

                        <div className={contactStyles.desc}>
                            {/* content goes here */}
                            <div className="row">

                                <div className={`col-6 my-2 animate__animated animate__backInLeft animate__delay-1s ${contactStyles.content}`}>
                                <i class="fa-solid fa-phone"></i> 8697**8***
                                </div>
                                <div className={`col-6 my-2 animate__animated animate__backInRight animate__delay-1s ${contactStyles.content}`}>
                                <i class="fa-solid fa-envelope"></i> utsab*****r00@gmail.com
                                </div>
                                <div className={`col-12 mt-5 mb-2  animate__animated animate__fadeIn animate__delay-2s text-center ${contactStyles.contentHeader}`}>
                                 Socials where a'm available
                                </div>
                                <div className={`col-6 my-4  animate__animated animate__backInLeft animate__delay-3s ${contactStyles.content}`}>
                                <a href="https://www.facebook.com/profile.php?id=100075459850106" target='_blank' className='nav-link'><i class="fa-brands fa-facebook"></i> Utsab Sarkar</a>
                                </div>
                                <div className={`col-6 my-4  animate__animated animate__backInRight animate__delay-3s ${contactStyles.content}`}>
                                <a href="https://www.instagram.com/executor_jit/" target='_blank' className='nav-link'><i class="fa-brands fa-instagram"></i> executor_jit</a>
                                </div>
                                <div className={`col-6 my-4  animate__animated animate__backInLeft animate__delay-3s ${contactStyles.content}`}>
                                <i class="fa-brands fa-whatsapp"></i> 8697**8***
                                </div>
                                <div className={`col-6 my-4  animate__animated animate__backInRight animate__delay-3s ${contactStyles.content}`}>
                                <Link to="/" className='nav-link'><i class="fa-solid fa-globe"></i>recepie-corner.com</Link>
                                </div>
                                
                            </div>                                                   
                        </div>


                        <hr />
                    </div>
                </div>
            </div>



        </>
    )
}

export default Contact
// className="animate__animated animate__backInRight animate__delay-2s"
