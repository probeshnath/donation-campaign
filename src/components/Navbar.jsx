import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='max-w-6xl mx-auto py-5'>
        <div className="navbar">
        <div className="flex-1">
            <a className="w-40">
                <img src="/Logo.png" alt="" />
            </a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 font-medium text-lg flex gap-7">
            <NavLink className={({ isActive, isPending }) => {return isActive ? "text-red-600 border-b-2 border-red-600" :
             isPending ? "pending" : "";
                }} to="/">Home</NavLink>
            <NavLink className={({ isActive, isPending }) => {
                return isActive ? "text-red-600 border-b-2 border-red-600" : isPending ? "pending" : "";
            }} to="/donation">Donation</NavLink>
            <NavLink className={({ isActive, isPending }) => {
                return isActive ? "text-red-600 border-b-2 border-red-600" : isPending ? "pending" : "";
            }} to="/statistics">Statistics</NavLink>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar