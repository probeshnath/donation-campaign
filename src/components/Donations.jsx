import React from 'react'
import { useLoaderData } from 'react-router-dom'
import DonateCard from './DonateCard'

const Donations = () => {
    const datas = useLoaderData()
  return (
    <div className=' py-10 max-w-6xl mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-5 gap-4">
            {
                datas.map((data,inx) =><DonateCard key={inx} data={data} /> )
            }
        </div>
    </div>
  )
}

export default Donations