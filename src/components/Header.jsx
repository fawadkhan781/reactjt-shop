import React from 'react'
import { Navbar } from './Navbar'

export function Header() {
  return (
    <header className="bg-light py-3">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo d-flex">
        <img src="/vite.svg" alt="Logo" />
        <h1 className="h4 ms-3">MyShop</h1>
      </div>
      <Navbar />
    </div>
  </header>
  )
}