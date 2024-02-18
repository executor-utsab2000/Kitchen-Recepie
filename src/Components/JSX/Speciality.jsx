import React from 'react'
import specialityStyles from '../ModuleSCSS/Speciality.module.scss';
import SpecialityData from '../../../Data Dictionary/SpecialityData';
import Footer from '../Fixed Components/Footer'
import { Link } from 'react-router-dom';







const Speciality = () => {
  return (
    <>
      <div className="container-fluid">

        <div className="row px-0">
          <div className="col-12 px-0">
            <div className={specialityStyles.mainBg}>
              <div className={specialityStyles.blackBgOverlay}></div>
              <div className="row" style={{ position: 'absolute' }}>
                <div className="col-12">
                  <p className="animate__animated animate__backInDown ">My Speciality</p>
                  <p className="animate__animated animate__backInDown animate__delay-1s">Dishes of my Excellence...</p>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div className="row px-0">
          <div className="col-12">
            <div className="row">
              {
                SpecialityData.map((elm) => {
                  return (
                    <>
                      <div className="col-12 " style={{ backgroundColor: `${elm.backgroundColor}` }}>
                        <div className="row ">
                          <div className={`col-lg-6 px-0 ${elm.orderClass1}`}>
                            <img src={elm.image} alt="img-fluid" className={specialityStyles.image} />
                          </div>
                          <div className={`col-lg-6 p-5 ${elm.orderClass2}`}>
                            <div className={specialityStyles.Content}>
                              <p>{elm.title}</p>
                              <p>{elm.description}</p>
                              <p>Category : {elm.category}</p>
                              <p>
                                <button><Link className="nav-link" to={elm.navLink}>Click Here to View Details</Link></button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 px-0">
            <Footer />
          </div>
        </div>





      </div>
    </>
  )
}

export default Speciality
