import React from 'react'
import aboutStyles from '../ModuleSCSS/About.module.scss';

const About = () => {
    return (
        <>
            <div className="container-fluid" style={{overflow:'hidden'}}>
                <div className="row">
                    <div className="col-lg-6 px-0">
                        <div className={aboutStyles.bgAbout}>
                            <div className={aboutStyles.blackBgOverlay}></div>
                            <span className="animate__animated animate__bounceInLeft">𝗔𝗯𝗼𝘂𝘁 𝗠𝗲</span>
                        </div>
                    </div>
                    <div className={`col-lg-6 px-5  ${aboutStyles.bgContent}`}>
                        <p className="animate__animated animate__backInDown">Presenting the Best Chef </p>
                        <div className={aboutStyles.underlineTop}></div>

                        <div className={aboutStyles.desc}>
                            <p className="animate__animated animate__backInRight animate__delay-2s">
                                The title of the best chef is a coveted and subjective accolade, but one name that consistently emerges as a culinary virtuoso is Chef  𝐔𝐭𝐬𝐚𝐛 𝐒𝐚𝐫𝐤𝐚𝐫. Her culinary prowess transcends traditional boundaries, captivating the palates of gastronomes worldwide. 𝐔𝐭𝐬𝐚𝐛 𝐒𝐚𝐫𝐤𝐚𝐫  is celebrated for her innovative approach to blending flavors, seamlessly marrying diverse ingredients to create exquisite masterpieces that tantalize the taste buds. With a career spanning three decades, she has honed her skills in renowned kitchens across the globe, earning accolades and Michelin stars along the way.
                            </p>

                            <p className="animate__animated animate__backInLeft animate__delay-3s">
                                What sets  𝐔𝐭𝐬𝐚𝐛 𝐒𝐚𝐫𝐤𝐚𝐫 apart is not just her technical skill but also her unwavering passion for the craft. She approaches each dish as a work of art, infusing it with creativity and a deep understanding of diverse culinary traditions. Her commitment to sustainability is evident in her sourcing of local, organic ingredients, ensuring an eco-conscious and ethically crafted dining experience.
                            </p>

                            <p className="animate__animated animate__backInRight animate__delay-4s">
                                Beyond her culinary genius, 𝐔𝐭𝐬𝐚𝐛 𝐒𝐚𝐫𝐤𝐚𝐫 is known for mentoring aspiring chefs, sharing her knowledge, and fostering a culture of continuous learning in the culinary world. Her influence extends beyond the kitchen, making her not just the best chef in terms of skill but also in terms of impact and inspiration within the global culinary landscape. Chef  𝐔𝐭𝐬𝐚𝐛 𝐒𝐚𝐫𝐤𝐚𝐫's culinary legacy is a testament to her dedication, innovation, and the indelible mark she has left on the world of gastronomy.
                            </p>
                        </div>


                        <hr />
                    </div>
                </div>
            </div>



        </>
    )
}

export default About
