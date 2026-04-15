import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from '../components/About'
import Rate from '../components/Rate'
import Contact from '../components/Contact'
import Index from '../components/Home'
import Main from '../components/Main'
import Userlogin from '../components/Userlogin'
import Single from '../components/Single'

function Routing() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/rate" element={<Rate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Userlogin />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
    </div>
  )
}

export default Routing
