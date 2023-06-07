import React from 'react'

function Offers() {
  return (
    <div className='container'>
         <div className='mt-4'>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" style={{padding:'5px 0px', borderRadius:'50%',backgroundColor:'white'}} data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" style={{padding:'5px 0px', borderRadius:'50%',backgroundColor:'white'}} data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" style={{padding:'5px 0px', borderRadius:'50%',backgroundColor:'white'}} data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="4000">
      <img src="https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/adidas/mlp.jpg" style={{borderRadius:'20px'}} className="img-fluid w-100" alt="..."/>
    
    </div>
    <div className="carousel-item" data-bs-interval="6000">
      <img src="https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/Philips/Desktop_MLP_Slider__1168x384_copy.png" style={{borderRadius:'20px'}} class="img-fluid w-100" alt="..."/>
     
    </div>
    <div className="carousel-item">
      <img src="https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/samsung/Desktop_MLP_slider__1168x384_(Show_Now).jpg" style={{borderRadius:'20px'}} class="img-fluid w-100" alt="..."/>
     
    </div>
  </div>
  </div>
  </div>
 
    </div>
  )
}

export default Offers