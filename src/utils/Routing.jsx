import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../components/Login'
import Users from '../components/Users'
import Addvahical from '../components/Addvahical'
import Showvahical from '../components/Showvahical'
import Addbanner from '../components/Addbanner'
import Addreview from '../components/Addreview'
import Showreview from '../components/Showreview'
import Home from '../components/Home'


function Routing() {
  return (
    <div>
      <Routes>
          <Route path="/deshborad" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addvahical" element={<Addvahical/>} />
          <Route path="/showvahical" element={<Showvahical />} />
          <Route path="/addbanner" element={<Addbanner />} />
          <Route path="/addreview" element={<Addreview />} />
          <Route path="/showreview" element={<Showreview />} />
        </Routes>
    </div>
  )
}

export default Routing
