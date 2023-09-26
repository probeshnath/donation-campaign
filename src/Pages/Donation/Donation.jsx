import { useEffect, useState } from "react"
import DonationCard from "./DonationCard"



const Donation = () => {
  const [donateItem, setDonateItem] = useState([])
  const [fdata, setFdata] = useState(4)
  useEffect(()=>{
    const localDonation = localStorage.getItem("donatePrice");
    setDonateItem(JSON.parse(localDonation))
  },[])
  console.log(donateItem)
  return (
   <div className="max-w-6xl mx-auto">
     <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-5'>

      {
        donateItem?.slice(0,fdata).map((item,inx) =>(

          <DonationCard key={inx}  donateItem={donateItem} item={item} />
        ))
      }

      
      
    </div>
    {
      donateItem?.length > 4 &&
    <div className="py-5 text-center">
      {
        donateItem?.length !== fdata && <button className="bg-[#009444] text-white py-3 px-8 rounded-lg" onClick={()=> setFdata(donateItem.length)}>See All</button>
      }
    </div>
    }
   </div>
  )
}

export default Donation