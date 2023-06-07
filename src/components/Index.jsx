import React from 'react'
import { Link } from 'react-router-dom'
function Blogindex(props) {
  return (
   <>
   <div className='container'>
  <section className="container my-3 "style={{backgroundColor:'orange'}}>
  <div  >
    <div className="card" style={{width:'10.21rem'}}>
      <img src={props.img} alt="" className="img-fluid w-100 h-50"  />
        <div className="card-body">
        <h6 className="card-title my-1">
          {props.title}
          </h6>
          {/* <a href=""  className="btn btn-primary mt-4">
            {"Price= " + "$" + props.price}
        </a>
        <p className="card-text mt-4">
            {" Discount Price= " + "$" + props.discount}
        </p> */}
        <div>
                <Link to={`../details/${props.id}`} className="btn my-2" style={{backgroundColor:'yellow'}}> Details</Link> 
                <button className="btn btn-warning">ADD TO CART</button>
               </div>

        </div>
    </div>

   </div>
  </section>
  </div>
   </>
  )
}

export default Blogindex