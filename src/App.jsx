import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/includes/Navbar'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Bloggindex from './pages/Bloggindex'
import RegisterPage from './pages/RegisterPage'
import SingleProduct from './pages/SingleProduct'
import { useState,createContext } from 'react'
export const loggedIn= createContext()

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)

  return (
    <loggedIn.Provider value={[isLoggedIn,setIsLoggedIn]}>
    <>
  <Navbar/> 
  <Routes>
  <Route path='/Index' element={<Bloggindex/>}></Route>
  <Route path='/Login' element={<LoginPage/>}></Route>
  <Route path='/Register' element={<RegisterPage/>}></Route>
  <Route path="/details/:productId" element={<SingleProduct/>} />
    </Routes> 
    </>
    </loggedIn.Provider>
  )
}

export default App
