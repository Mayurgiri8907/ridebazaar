import React from 'react'
import { Routes,Route } from 'react-router-dom'
import About from '../components/About'
import Rate from '../components/Rate'
import Car from '../components/Car'
import Bike from '../components/Bike'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Userlogin from '../components/Userlogin'
import Single from '../components/Single'
import Delivery from '../components/Delivery'
import Payment from '../components/Payment'
import Error404 from '../components/Error404'

function Routing() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/rate" element={<Rate />} />
          <Route path="/car" element={<Car />} />
          <Route path="/bike" element={<Bike />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/login" element={<Userlogin />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/*" element={<Error404/>} />
        </Routes>
    </div>
  )
}

export default Routing
