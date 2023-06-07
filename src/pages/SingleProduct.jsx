import axios from "axios";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
function SingleProduct(){
    const [product,setProducts]=useState([]);
    const {productId}=useParams()
    function singlePro(){
        axios.get(`https://dummyjson.com/products/${productId}`)
        .then(res=>{
            setProducts(res.data)
            console.log(res.data)
        })
    }
    useEffect(()=>{
        singlePro()
    },[])
    let isProduct =Object.keys(product).length>0? true:false;
    return(
        <div className="container-fluid">
             <h2 style={{textAlign:'center', color:'white'}} className="mt-2 ">Details</h2>
            {isProduct ?
            <div className="centerd ">

             <div >
                        <h2>Product</h2>

                            <img src= { product.images[0]} style={{width:'200px'}} className="img-fluid"  />
                        
                        
                        <p>
                        <h4 className="mt-2">Related Products:</h4>

                        <img src={product.images[1]} className="m-3 img-fluid" style={{width:'100px'}} alt="" />
                        <img src={product.images[2]} className="m-3 img-fluid" style={{width:'100px'}} alt="" />
                        <img src={product.images[3]} className="m-3 img-fluid" style={{width:'100px'}} alt="" />
                        <img src={product.images[4]} className="m-3 img-fluid" style={{width:'100px'}} alt="" />
                        </p>


              </div>
              <div>
                        <div style={{fontSize:'25px'}} className="mt-3"> 
                                {"Brand:"  + " " + product.brand}
                            </div>
                        <div style={{fontSize:'15px'}} className="mt-3"> 
                                {"Price:" + " "  +"$" + product.price}
                            </div>
                            <div style={{fontSize:'15px'}} className="mt-3"> 
                                {"Description:" + " " + product.description}
                            </div>
                        </div>
            </div> 
            : <p className="text-center">Loading...</p>
            }

        </div>
    )
}
export default SingleProduct