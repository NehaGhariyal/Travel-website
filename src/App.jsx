import{BrowserRouter, Routes, Route,Link, NavLink, createBrowserRouter, createRoutesFromElements,Router, RouterProvider}from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import NavLayout from './Layout/NavLayout'
import Hotels from './Components/Hotels'
import Flights from './Components/Flights'
import Bookings from './Components/Bookings'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Notfound from './Components/Notfound'
import Destinations from './Components/Destinations'
import Home from './Components/Home'
function App() {
  const [count, setCount] = useState(0)

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'element={<NavLayout/>}>
        <Route index element={<Home/>}/>
      <Route path='/Destinations'element={<Destinations/>}/>
      <Route path='/Hotels'element={<Hotels/>}/>
      <Route path='/Flights'element={<Flights/>}/>
      <Route path='/Bookings'element={<Bookings/>}/>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/Signup'element={<Signup/>}/>
      <Route path='*' element={<Notfound/>}/>
      
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
   
    </>
  )
}

export default App
