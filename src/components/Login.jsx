import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { loggedIn } from '../App';
import { useNavigate } from 'react-router-dom';
function Login() {
  let [isLoggedIn,setIsLoggedIn]=useContext(loggedIn)
  let navigate = useNavigate()
  const [user,setUser]=useState({
    email:'',
    password:''
  })
  function getUser(e){
    let name=e.target.name;
    let value=e.target.value
    setUser({
      ...user,
      [name]:value
    })
   
  }
  const submitData =(e)=>{
    e.preventDefault()
    if (localStorage.getItem('users')){
      let users = JSON.parse(localStorage.getItem('users'))
      let validatedUser= users.filter((value,index)=>{
        return value.Email == user.email && value.Password==user.password
      })
      if (validatedUser.length==0){
        alert('Invalid Details')
      }else{
        setIsLoggedIn(true)
        navigate('/Index')
        console.log(isLoggedIn)
      }
    }

  }

  return (
    <div>
      <div className="text-center text-light mt-5 container " style={{backgroundColor:'white'}}>
        <div>
          <img src="https://group-live.jumia.is/images/press/articles/jumia-listed-on-the-new-york-stock-exchange.png" alt="logo" className='bg-light mt-3 ' style={{width:'200px'}} />
            <h1 className='text-dark'>
              Welcome To Jumia
            </h1>
            <img src="data:image/jpeg;base64,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" alt="" />
            <p className='text-dark blink'>
              Type your Username and Password  to access your account
            </p>
        </div>
      <form  onSubmit={submitData}>
         
      
                        <div class="form-floating my-5">
                            <input type="email" class="form-control" id="form-floating-1" name="email" placeholder="John Doe" onChange={getUser} />
                            <label for="form-floating-1" htmlFor='Email'  className='text-dark' >Username/Email</label>
                        </div>
       
                         <div class="form-floating my-5">
                            <input  type="password" class="form-control" id="form-floating-1" name="password" onChange={getUser} placeholder="John Doe"/>
                            <label for="form-floating-1" htmlFor='Password'  className='text-dark ' >Password</label>
                        </div>
                        <div>
                        <button class="btn btn-primary " type="submit">Login</button>
                        </div>
      </form>


                       
                        <div className='mt-3 text-warning'>
                        <h6>Continue with</h6>

                        </div>
                        <div>
                        <button class="btn btn-primary d-grid gap-2 col-12 mx-auto btn-lg " type="button">Facebook</button>

                        </div>

                        <div className='text-info mt-3'>
                          <h4>OR</h4>
                        </div>
                        <div>
                        <button class="btn btn-success d-grid gap-2 col-12 mx-auto btn-lg " type="button">Google account</button>

                        </div>

                        <footer className='text-center text-dark mt-3'>
                        <h5><span><img src="https://www.farmaciasantambrogio.it/wp-content/uploads/2020/11/reparti-merate-farmacie.png" alt="shield" style={{width:'10%'}}/></span> Design By CODEMaster</h5>
                        </footer>

      

      </div>

    </div>
  )
}

export default Login