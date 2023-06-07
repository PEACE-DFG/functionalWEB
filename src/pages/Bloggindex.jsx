import React from 'react'
import Blogindex from '../components/Index'
import {useEffect,useState} from "react"
import axios from "axios"
import Product from '../components/includes/Product';
import Official from '../components/Official';
import Offers from '../components/Offers';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Static from '../components/Static';
import Bloges from './Bloges';
import HeadBlog from '../components/HeadBlog';
import Searches from './Searches';
function Bloggindex() {
  const [products,setProducts]=useState([]);
  function fetchData(){
    axios.get('https://dummyjson.com/products')
    .then(res=>{
      setProducts(res.data.products)

    }).catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
      <div>
        <Static/>
    <Product/>
    <div className='tone'>

      {
        products.length>0?
        products.map((value,index)=>{
          return(
            <div key={index}>
           <Blogindex id={value.id} brand={value.brand} description={value.description} title={value.title} img={value.images[0]}  price={value.price} discount={value.discountPercentage}/>

            </div>
          )
        }):
        <h3 className='text-center text-light'>Products Loading...</h3>
      }



    </div>
    <Official/>
    <Offers/>
    <HeadBlog/>
    <Bloges/>
    <Searches/>
    <Contact/>
    <Footer/>

      </div>
    
  )
}

export default Bloggindex