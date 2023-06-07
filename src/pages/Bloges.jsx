import React from 'react'
import axios from 'axios'
import Bloge from '../components/Bloge'
import {useEffect,useState} from "react"

function Bloges() {
    const [posts,setPost]=useState([])
   function fetchData(){
    axios.get('https://dummyjson.com/posts')
    .then(res=>{
        setPost(res.data.posts)
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
   }
   useEffect(()=>{
    fetchData()
   },[])
  return (
    <div>
        {
            posts.length>0?
            posts.map((value,index)=>{
                return(
                    <div key={index}>
                        <Bloge title={value.title} body={value.body}/>
                        </div>

                )
            }):
            <h3 className='text-light text-center'>Loading Posts...</h3>
        }
    </div>
  )
}

export default Bloges