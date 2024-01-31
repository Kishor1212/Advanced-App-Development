import React from 'react'
// import Hello from './Components/Login'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Nurse from './Components/Nurse'
import Contact from './Components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Jobs from './Components/Jobs'
// import Admin from './Components/Admin/Admin';


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
       <Route path='/nurse' element={<Nurse/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/job' element={<Jobs/>}/>

    

      

      
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App