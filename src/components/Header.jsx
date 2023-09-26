import React, { useState } from 'react'
import Navbar from './Navbar'

const Header = ({handleSearchInputChange,searchDonate}) => {
  
  return (
    <div className=''>
       <div className="hero h-[82vh]" style={{backgroundImage: 'url(https://png.pngtree.com/background/20210711/original/pngtree-fresh-girl-outing-banner-picture-image_1066277.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="text-center">
            <h1 className="mb-5 text-5xl text-white font-bold">I Grow By Helping People In Need</h1>
            <div className="form-control mt-10">
                <div className="input-group flex justify-center items-center">
                    <input type="text" placeholder="Search here…" onChange={handleSearchInputChange} className="input text-gray-500 input-bordered" />
                    <button className="bg-[#FF444A] w-20 text-white btn-square" onClick={searchDonate} >Search</button>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header