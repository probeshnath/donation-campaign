import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const DonationCard = ({item}) => {
  const [donateData, setDonateData] = useState()
  const [actualData, setActualData] = useState()
   useEffect(()=>{
    fetch('/data.json')
    .then( res => res.json())
    .then((data) => {
      setDonateData(data);
      // Find the matching item and set it to actualData
      const actual = data.find((dot) => dot.id === item);
      setActualData(actual);
    })
   },[])

 
      // const actual = donateData.find((dot) => dot.id === item);
      // setActualData(actual);
  
  // }, [donateData, item]);
  // console.log("total",donateItem.length)
  return (
    <div >
        {/* {
          actualData > 0 ? ( */}
            <div  style={{background:actualData?.card_bg}} class="relative flex max-w-[48rem] flex-row rounded-md bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-md rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={actualData?.picture}
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-3">
              <h6 style={{background:actualData?.category_bg}} class="mb-3 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                {actualData?.category}
              </h6>
              <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {actualData?.title}
              </h4>
              <p style={{color: actualData?.text_button_bg}} class="mb-2 block font-sans text-base font-normal leading-relaxed  antialiased">
                {actualData?.price}
                
              </p>
  
                <Link to={`/donations/${actualData?.id}`} style={{background:actualData?.text_button_bg}} 
                  class=" rounded-lg py-3 px-6 text-center text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                > View Details</Link>
         
              
            
            </div>
          </div>
        {/* //   ) : (
        //     <h1>Atfirst Donate Please</h1>
        //   )
        // } */}
    </div>
  )
}

export default DonationCard