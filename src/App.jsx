import { useState } from 'react'
import './App.css'
import SignUp from './SignUp'
import PhoneNumber from './pages/PhoneNumber'
import Otp from './pages/Otp'
import LandingPage from './pages/LandingPage'
import Vendor from './pages/Vendor'
import { Route,Routes } from 'react-router-dom'
import User from './pages/User'
import Filters from './components/Filters'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=' w-mwidth h-screen flex-col justify-center'>
      <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/email' element={<PhoneNumber/>}></Route>
      <Route path='/otp' element={<Otp/>}></Route>
      <Route path='/vendor' element={<Vendor/>}></Route>
      <Route path='/landingpage' element={<LandingPage/>}></Route>
      <Route path='/filters' element={<Filters/>}></Route>
      </Routes>
      
      {/* <Filters/> */}
      
      </div>
  )
}

export default App
