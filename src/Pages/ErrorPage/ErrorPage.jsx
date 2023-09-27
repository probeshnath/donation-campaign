import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex justify-center text-center items-center h-screen bg-orange-200 '>
        <div>
            <h2 className='text-4xl font-semibold  mb-5'>This Page is not Found</h2>
           <Link className='bg-orange-400 cursor-pointer py-2 px-4 rounded-md text-white' to={'/'}><button>Go to Home Page</button></Link> 
        </div>
    </div>
  )
}

export default ErrorPage