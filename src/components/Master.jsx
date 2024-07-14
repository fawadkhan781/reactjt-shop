import React from 'react'
import {Header } from './Header';
import Footer from './Footer';
import { Banner } from './Banner';
import { Outlet } from 'react-router-dom';

const Master = () => {
  return (
    <div className="container">
    <Header />
     <Banner />
      <Outlet />
    <Footer />
    </div>
  )
}

export default Master