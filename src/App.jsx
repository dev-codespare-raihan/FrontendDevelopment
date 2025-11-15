import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Registration from './components/Registration'
import Login from './components/Login'
import Admin from './components/Admin'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App