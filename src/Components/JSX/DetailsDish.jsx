import React from 'react'
import '../ModuleSCSS/DetailsDish.scss'
import { useParams } from 'react-router-dom'
import DishesRecepie from '../../../Data Dictionary/DishesRecepie'
import Footer from '../Fixed Components/Footer'




const DetailsDish = () => {


  // through params we receive the value ofurl parameter in form of object ... key value pair... whwre key is thename passed in APP.JSX
  const params = useParams()
  const { dishName } = useParams(); // destructuring of params
  console.log(dishName);


  const data = DishesRecepie.find((elm) => elm.urlNav == dishName);  //filtering from object of array to find out the urlNav from object to fet one data that matches  
  console.log(data.image);


// checking width of screen by screen.width and performing inner as required
  setInterval(() => {
    // console.log(scrollY);
    if(screen.width<550){
      if (scrollY > 600) {
        document.querySelector('.scrollUpIcon a i').style.display = 'block';
      }
     else if (scrollY < 600) {
        document.querySelector('.scrollUpIcon a i').style.display = 'none';
      }
    }
  else if(screen.width>550){ 
      if (scrollY > 200) {
        document.querySelector('.scrollUpIcon a i').style.display = 'block';
      }
     else if (scrollY < 200) {
        document.querySelector('.scrollUpIcon a i').style.display = 'none';
      }
    }
  }, 100)



  // setInterval(()=>console.log(screen.width) , 5000)



  return (
    <>

      <div className="container-fluid detailDish">
        <div className="container">
          <div className="row">


            {/* header of dish */}
            <div className="col-12 d-flex justify-content-center justify-content-lg-start">
              <header>{data.title}</header>
            </div>
            {/* description */}
            <div className="col-12 my-3">
              <span className="description"> {data.desc} </span>
            </div>




            {/* section2 ingredients and image */}
            <div className="col-12">
              <div className="row">

                <div className="col-lg-8 order-lg-0 order-1 px-0">
                  <div className="container row">
                    {/* ingredients header */}
                    <div className="col-12 mt-5">
                      <span className="header2">Ingredients :</span>
                    </div>
                    {/* ingredients list */}
                    <div className="col-12 my-3">
                      <div className="row">
                        {
                          data.ingredients.map((elm) => {
                            return (
                              <div className="col-md-3 col-6 my-2 itemNames px-3 " key={Math.random()}>
                                {elm}
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>

                  </div>
                </div>

                {/* image part */}
                <div className="col-lg-4 order-lg-1 order-0 my-3  d-flex justify-content-center">
                  <div className="imageContainer">
                    <img src={data.image} alt="" className='img-fluid' />
                  </div>
                </div>
              </div>
            </div>




            {/* Method */}
            <div className="col-12 mt-5">
              <span className="header2">Steps to Prepare :</span>
            </div>
            {/* Method list */}
            <div className="col-12 my-3">
              <div className="row">
                {
                  data.steps.map((elm, index) => {
                    return (
                      <div className="col-12 my-3 methodList" key={Math.random()}>
                        <span className="text-danger">Step {index + 1} :</span>  {elm}
                      </div>
                    )
                  })
                }
              </div>
            </div>

          </div>



          <div className="row">
            <div className="col-12 d-flex pe-4 justify-content-end scrollUpIcon">
              <a href="#top" className='nav-link'> 
                <i className='fa fa-solid fa-pizza-slice'></i>
              </a>
            </div>
          </div>




          <div className="row">
            <div className="col-12 d-flex justify-content-center py-5">
              <img src="/Images/thankyou.png" alt="" className='img-fluid ' />
            </div>
          </div>









        </div>
      </div>
      <Footer />


    </>
  )
}

export default DetailsDish
