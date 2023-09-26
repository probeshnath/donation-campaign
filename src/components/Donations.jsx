
import { useLoaderData } from 'react-router-dom'
import DonateCard from './DonateCard'
import { useEffect, useState } from 'react'

const Donations = ({searchData}) => {
  const datas = useLoaderData()
  const [filterData, setFilterData]= useState(datas)
    // setFilterData(datas)
  

    useEffect(()=>{
      if(searchData){
        setFilterData(searchData)
      }else{
        setFilterData(datas)
      }
    },[searchData,datas])
   
  return (
    <div className=' py-10 max-w-6xl mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-5 gap-4">
            {
                filterData.map((data,inx) =><DonateCard key={inx} data={data} /> )
            }
        </div>
    </div>
  )
}

export default Donations