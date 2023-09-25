import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainRoute = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet />
    </div>
  )
}

export default MainRoute