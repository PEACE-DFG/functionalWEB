import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  let navigate = useNavigate()
  const [user,setUser]=useState({
    Firstname:'',
    Lastname:'',
    Telephone:'',
    Email:'',
    Password:'',
    Repeatpassword:''

  })
  const [errors,setErrors]=useState([])
  const submitData=(e)=>{
    e.preventDefault()
    if(user.Firstname==''){
      setErrors((err)=>{
        return{...err,
          FirstnameErr:'Your First name is required'}
      })
    }
    if (user.Lastname==''){
      setErrors((err)=>{
        return{
          ...err,
          LastnameErr:'Your Last name Is Required'
        }
      })
    }
    if (user.Telephone==''){
      setErrors((err)=>{
        return{
          ...err,
          TelephoneErr:'Your Telephone Is Required'
        }
      })
    }
    // // if (user.Telephone.length<11){
    // //   setErrors((err)=>{
    // //     return{
    // //       ...err,
    // //       TelephoneErr:'Your Telephone Number Should not be less  than 11 digits'
    // //     }
    // //   })
    // }
    if(user.Email==''){
      setErrors((err)=>{
        return{
          ...err,
          EmailErr:'Your Email is Required'
        }
      })
    }
    if(user.Password==''){
      setErrors((err)=>{
        return{
          ...err,
          PasswordErr:'Your Password is Required'
        }
      })
    }
    if(user.Repeatpassword==''){
      setErrors((err)=>{
        return{
          ...err,
          RepeatpasswordErr:'Your Password is Required'
        }
      })
    }
    if (user.Password.length != user.Repeatpassword.length){
      setErrors((err)=>{
        return{
          ...err,
          RepeatpasswordErr:'Your Passwords do not match'
        }
      })
    }
    else{
      setErrors((err)=>{
        return{
          ...err,
          RepeatpasswordErr:'Your Passwords match'
        }
      })

    }
    let users=[];
    if (errors.length==0){
      if(localStorage.getItem('users')){
        let lUsers=localStorage.getItem('users')
        users=JSON.parse(lUsers);
      }
      users.push(user);
      const dataUsers=JSON.stringify(users)
      localStorage.setItem('users',dataUsers)
      navigate('/Login')
    }
   
  }
  function message(){
    alert('Thank you for Registering, Proceed to Login')

  }
  return (
    <div>
      <form action="" onSubmit={submitData}>
        <div className='text-center text-light container mt-5 pb-5 bg-light'>
        <div>
          <img src="https://group-live.jumia.is/images/press/articles/jumia-listed-on-the-new-york-stock-exchange.png" alt="logo" className='bg-light mt-3 ' style={{width:'200px'}} />
            <h1 className='text-dark'>
              Welcome To Jumia
            </h1>
            <img src="https://d2lev5xroqke9e.cloudfront.net/ng/view/67b42c3956" alt="" style={{width:'100px'}} />
            <p className='text-dark blink'>
            Please fill in the required details correctly to create your jumia account
            </p>
            <div class="form-floating my-5">
                            <input type="text" class="form-control" id="form-floating-1" placeholder="John Doe"
                             onChange={(e)=>{
                              setUser({...user, Firstname:e.target.value})
                            }}/>
                            <span style={{color:'red'}}>
                            {errors.FirstnameErr}

                            </span>
                            <label for="form-floating-1" name='Firstname' className='text-dark'>Firstname</label>
                        </div>

                        <div class="form-floating my-5">
                            <input type="text" class="form-control" id="form-floating-1" placeholder="John Doe"
                             onChange={(e)=>{
                              setUser({...user, Lastname:e.target.value})
                            }}/>
                            <label for="form-floating-1" name='Lastname' className='text-dark'>Lastname</label>
                            <span style={{color:'red'}}>
                            {errors.LastnameErr}

                            </span>
                        </div>

                         <div class="form-floating my-5">
                            <input type="tel" class="form-control" id="form-floating-1" placeholder="John Doe"
                             onChange={(e)=>{
                              setUser({...user, Telephone:e.target.value})
                            }}/>
                            <label for="form-floating-1" name='Telephone' className='text-dark'>Telephone</label>
                            <span style={{color:'red'}}>
                            {errors.TelephoneErr}

                            </span>
                       </div>          
                        <div class="form-floating my-5">
                            <input type="email" class="form-control" id="form-floating-1" placeholder="John Doe"
                             onChange={(e)=>{
                              setUser({...user, Email:e.target.value})
                            }}/>
                            <label for="form-floating-1" name='Email' className='text-dark'>Email</label>
                            <span style={{color:'red'}}>
                            {errors.EmailErr}

                            </span>
                        </div>
                        <div class="form-floating my-5">
                            <input type="password" class="form-control" id="form-floating-1" placeholder="John Doe"
                             onChange={(e)=>{
                              setUser({...user, Password:e.target.value})
                            }}/>
                            <label for="form-floating-1" name='Password' className='text-dark'>Enter Password</label>
                            <span style={{color:'red'}}>
                            {errors.PasswordErr}

                            </span>
                        </div>
                        <div class="form-floating my-5">
                            <input type="password" class="form-control" id="form-floating-1" placeholder="John Doe"
                             onChange={(e)=>{
                              setUser({...user, Repeatpassword:e.target.value})
                            }}/>
                            <label for="form-floating-1" name='Repeatpassword' className='text-dark'>Repeat Password</label>
                            <span style={{color:'blue'}}>
                            {errors.RepeatpasswordErr}

                            </span>

                        </div>
                        {/* <div>
                        <span style={{color:'green'}}>
                            {errors.Repeatpasswordvalid}

                            </span>
                        </div> */}
                        <div>
                        <button  class="btn btn-primary " type="submit" onClick={message}>Submit</button>
                        </div>
                        <footer className='text-center text-dark mt-3'>
                        <h5><span><img src="https://www.farmaciasantambrogio.it/wp-content/uploads/2020/11/reparti-merate-farmacie.png" alt="shield" style={{width:'10%'}}/></span> Design By CODEMaster</h5>
                        </footer>

        </div>
        </div>
      </form>
    </div>
  )
}

export default Register