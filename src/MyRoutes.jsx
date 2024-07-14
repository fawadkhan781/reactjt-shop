import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import {Contact} from './components/Contact'
import { Shop } from './components/Shop'
import Master from './components/Master'
import Single from './components/Single'

export const MyRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Master />} >
            <Route path='/' index element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/single/:id' element={<Single />} />
        </Route>
    </Routes>
  )
}
